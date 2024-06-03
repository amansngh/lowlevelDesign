import LudoBoard from "./Models/LudoBoard";
import LudoPlayer from "./Models/Player";
import Dice from "./Models/Dice";
import { LudoPiece } from "./Models/Piece";
import IWinningStrategy from "./IWinningStrategy";
import WinningStategy from "./WinningStrategy";

export default class LudoGame {
    _board : LudoBoard;
    _players : LudoPlayer[];
    _dice : Dice;
    _currentPlayer : LudoPlayer;
    _winningStrategy : IWinningStrategy;
    constructor()
    {
        this._board = new LudoBoard();
        this._board.addSnakes();
        this._board.addLadders();

        this._players = new Array<LudoPlayer>();
        this._players.push(new LudoPlayer("1", "Aman", LudoPiece.YELLOW));
        this._players.push(new LudoPlayer("2", "Nikhil", LudoPiece.BLUE));
        this._players.push(new LudoPlayer("3", "Nikku", LudoPiece.GREEN));
        this._dice = new Dice();
        this._currentPlayer = this._players[0];
        this._players.forEach(pl => {
            pl._currentPosition = 0;
        });
        this._winningStrategy = new WinningStategy();
    }

    startGamePlay()
    {
        var maxLimit = this._board._row * this._board._col;
        var anyPlayerWon = false;
        this._board.displayBoard();
        while(!anyPlayerWon)
            {
                console.log("Player " + this._currentPlayer._name +  " turn");
                console.log("Rolling Dice .....");
                var diceRoll = this._dice.roll();
                console.log("Dice got " + diceRoll);
                var nextCell = this._currentPlayer._currentPosition + diceRoll;
                if(nextCell >= maxLimit)
                    {
                         anyPlayerWon = this._winningStrategy.hasWon(nextCell, maxLimit);
                         console.log("Congratulationss for Winning " + this._currentPlayer._name);
                         continue;
                    }
                console.log("Intiating piece movement to " + nextCell);
                var finalPos = this.calculateNextPosition(nextCell, maxLimit);
                console.log("final Position = " + finalPos);
                this._currentPlayer._currentPosition = finalPos;
                anyPlayerWon = this._winningStrategy.hasWon(finalPos, maxLimit);
                if(anyPlayerWon) console.log("Congratulationss for Winning " + this._currentPlayer._name);
                this._currentPlayer = this.getNextPlayer(); //Can be solved with Dequeue.
            }   
    }

    getNextPlayer() : LudoPlayer
    {
        //Can be solved with Dequeue.
        for(let i = 0; i < this._players.length; i++)
            {
                if(this._currentPlayer == this._players[i])
                    {
                        if(i < this._players.length-1)
                        return this._players[i+1];
                        else return this._players[0];
                    }
            }
    }

    calculateNextPosition(nextCell : number ,maxLimit : number) : number
    {
        if(nextCell > maxLimit) nextCell = maxLimit;

        var boardroW = Math.floor(nextCell/10);
        var boardCol = nextCell%10;
        
        if(this._board._boardMap[boardroW][boardCol] == 0)
            {
                return nextCell;   
            }
        else if(this._board._boardMap[boardroW][boardCol] > nextCell)
            {
                console.log("Hurray you have found a ladder to ....." + this._board._boardMap[boardroW][boardCol]);
                return this.calculateNextPosition(this._board._boardMap[boardroW][boardCol] , maxLimit);
            }
        else if(this._board._boardMap[boardroW][boardCol] < nextCell)
            {
                console.log("Ooops Snake bit you to ....." + this._board._boardMap[boardroW][boardCol]);
                return this.calculateNextPosition(this._board._boardMap[boardroW][boardCol], maxLimit);
            }
    }
}