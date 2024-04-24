using C__ConsoleApp.TicTacToe.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe
{
    public class Game
    {
        private Player[] players;
        private Board _board;
        private int _currentPlayer;
        private IGameStrategy _strategy;

        public Game(Player[] players = null, Board board = null, int currentPlayer = 0, IGameStrategy strategy = null)
        {
            this.players = (players != null) ? players : new Player[]{ new Player("Player 1", new Piece(PieceType.X)), new Player("Player 2", new Piece(PieceType.O))};
            _board = (board != null) ? board : new Board(3);
            _currentPlayer = currentPlayer;
            _strategy = (strategy != null) ? strategy : new DefaultGameStrategy();
        }

        public void start()
        {
            Console.WriteLine("Welcome to the game");
            bool noWinner = true;
            while (noWinner)
            {
                this._board.printBoard();
                var fs = this._board.getFreeSpaces();

                if(fs.Count == 0)
                {
                    noWinner = false;
                    Console.WriteLine("Its a Tie");
                    continue;
                }

                Console.WriteLine(this.getCurrentPlayer().Name() + "'s Turn, awaiting input");
                string input = Console.ReadLine();
                if(validateInput(input, out int a, out int b))
                {
                    if(fs.Contains(input))
                    {
                        this._board.markSpace(getCurrentPlayer(), a, b);
                        fs = this._board.getFreeSpaces();
                    }
                }

                this.getNextPlayer();
                Player winner;
                noWinner = !IsWinner(out winner);
                if(noWinner == false)
                {
                    this._board.printBoard();
                    Console.WriteLine("Congratulations for winning " + winner.Name());
                }
            }

            Console.ReadKey();
        }

        private Player getNextPlayer()
        {
            if(this._currentPlayer+1 <= this.players.Length-1)
            {
                this._currentPlayer = this._currentPlayer+1;
            }
            else this._currentPlayer = 0;

            return this.players[this._currentPlayer];
        }

        private Player getCurrentPlayer()
        {
            return this.players[this._currentPlayer];
        }

        private bool validateInput(string input, out int a, out int b)
        {
            a = 0;
            b = 0;

            if(input.Length == 3)
            {
                a = input[0] - '0';
                b = input[2] - '0';
                if (0 <= a && a <= 9 && 0 <= b && b <= 9 && input[1] == ',')
                {
                    return true;
                }
            }
            return false;
        }

        private bool IsWinner(out Player winner)
        {
            return this._strategy.runGameStrategy(this._board, this.players, out winner);
        }
    }
}
