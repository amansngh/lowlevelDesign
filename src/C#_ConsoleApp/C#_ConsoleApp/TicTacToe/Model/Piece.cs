using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe.Model
{
    public class Piece : IPiece
    {
        private PieceType _value;
        public Piece(PieceType value)
        {
            this._value = value;
        }

        public PieceType value()
        {
            return this._value;
        }
    }
}
