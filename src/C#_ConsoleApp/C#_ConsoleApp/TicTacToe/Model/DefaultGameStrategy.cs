using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe.Model
{
    internal class DefaultGameStrategy : IGameStrategy
    {
        private GameStrategyType _choice;
        public DefaultGameStrategy() { 
            _choice = GameStrategyType.Default;
        }

        public bool runGameStrategy(Board board, Player[] players, out Player winner)
        {
            int size = board._size;
            winner = null;
            var gameBoard = board.getBoard();
            
            if(checkRows(size, gameBoard, players, out winner))
            {
                return true;
            }

            if (checkCols(size, gameBoard, players, out winner))
            {
                return true;
            }

            if (checkDiagonals(size, gameBoard, players, out winner))
            {
                return true;
            }

            return false;
        }

        public void updateCounter(PieceType pieceType, int[] counter) 
        {
            if (pieceType == PieceType.X)
            {
                counter[0]++;
            }
            else if (pieceType == PieceType.O)
            {
                counter[1]++;
            }
        }

        public void initCounters(int size, int[] counter)
        {
            for (int k = 0; k < size; k++)
            {
                counter[k] = 0;
            }
        }

        public bool findWinner(Player[] players, int size, int[] counter, out Player winner)
        {
            winner = null;
            for(int k = 0; k < size-1; k++)
            {
                if (counter[k] == size)
                {
                    PieceType p = PieceType._;
                    if(k == 0)
                    {
                        p = PieceType.X;
                    }
                    else if (k == 1)
                    {
                        p = PieceType.O;
                    }

                    foreach (Player playa in players)
                    {
                        if (p == playa.getPiece().value())
                        {
                            winner = playa;
                            return true;
                        }
                    }
                }
            }

            return false;
        }


        public bool checkRows(int size, Piece[][] gameBoard, Player[] players, out Player winner)
        {
            winner = null;
            int[] counter = new int[size];
            for (int i = 0; i < size; i++)
            {
                initCounters(size, counter);

                for (int j = 0; j < size; j++)
                {
                    updateCounter(gameBoard[i][j].value(), counter);
                }
                
                bool val = findWinner(players, size, counter, out winner);
                if (val) return val;
            }
            return false;
        }

        public bool checkCols(int size, Piece[][] gameBoard, Player[] players, out Player winner)
        {
            winner = null;
            int[] counter = new int[size];
            for (int j = 0; j < size; j++)
            {
                initCounters(size, counter);
                for (int i = 0; i < size; i++)
                {
                    updateCounter(gameBoard[i][j].value(), counter);
                }

                bool val = findWinner(players, size, counter, out winner);
                if (val) return val;
            }
            return false;
        }

        public bool checkDiagonals(int size, Piece[][] gameBoard, Player[] players, out Player winner)
        {
            winner = null;
            int[] counter = new int[size];
            initCounters(size, counter);
            for (int i = 0, j = 0; i < size; i++, j++)
            {
                updateCounter(gameBoard[i][j].value(), counter);
            }

            bool val = findWinner(players, size, counter, out winner);
            if (val) return val;

            initCounters(size, counter);

            for (int i = 0, j = size-1; i < size; i++, j--)
            {
                updateCounter(gameBoard[i][j].value(), counter);
            }

            bool val1 = findWinner(players, size, counter, out winner);
            if (val1) return val1;

            return false;
        }
    }
}
