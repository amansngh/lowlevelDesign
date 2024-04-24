using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe.Model
{
    public class Player
    {
        private string _username;
        private Piece _piece;

        public Player(string username, Piece piece)
        {
            _username = username;
            _piece = piece;
        }

        public string Name() {
            return _username;

        }

        public Piece getPiece() { return _piece; }
    }
}
