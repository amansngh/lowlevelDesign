using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe.Model
{
    public class Board
    {
        public int _size;
        private Piece[][] _board;

        public Board(int size)
        {
            _size = size;
            _board = new Piece[_size][];
            for (int i = 0; i < _size; i++)
            {
                this._board[i] = new Piece[_size];
                for(int j = 0; j < _size; j++)
                {
                    this._board[i][j] = new Piece(PieceType._);
                }
            }
        }

        public void printBoard()
        {
            for(int i =0; i < _size; i++)
            {
                //Console.WriteLine(this._board[i]);
                for (int j = 0; j < this._size; j++)
                {
                    Console.Write(this._board[i][j].value().ToString() +  "|");
                }
                Console.WriteLine();
            }
        }

        public List<string> getFreeSpaces()
        {
            List<string> freeSpaces = new List<string>{};
            for(int i =0; i < _size; i++)
            {
                for(int j = 0;j < this._size; j++)
                {
                    if (this._board[i][j].value() == PieceType._)
                    {
                        freeSpaces.Add(i.ToString() + "," + j.ToString());
                    }
                }
            }

            return freeSpaces;

        }

        public void markSpace(Player player, int i, int j)
        {
            this._board[i][j] = player.getPiece();
        }

        public Piece[][] getBoard()
        {
           return this._board;
        }
    }
}
