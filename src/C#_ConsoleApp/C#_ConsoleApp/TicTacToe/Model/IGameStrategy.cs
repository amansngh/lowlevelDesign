using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp.TicTacToe.Model
{
    public interface IGameStrategy
    {
        bool runGameStrategy(Board board, Player[] players, out Player winner);
    }
}
