import { Component } from 'react';

class Game extends Component<{}, { display : string | string[][]}> 
{
    private _players : Array<Player>; // should have used Dequeue.
    private _board : Board;
    private _currentPlayer : number;
    private _gameStrategy : IGameStrategy;

    constructor(props : {}, players? : Array<Player>, board? : Board, gameStrategy? : IGameStrategy)
    {
        super(props);
        this.state = {
            display : "Welcome to the game"
        };

        this._players = players ? players : new Array<Player>(new Player("Player 1", new Piece(PieceType.X)), new Player("Player 2", new Piece(PieceType.O)));
        this._board = board ? board : new Board(3);
        this._currentPlayer = 0;
        this._gameStrategy = gameStrategy ? gameStrategy : new DefaultGameStrategy(); 
    }

    start() : void{
      let noWinner : boolean = true;
      while(noWinner)
        {
            //this.setState({this._board.printBoard()});
            //this._display = this._board.printBoard();
            //console.log(display);
            let fs = this._board.getFreeSpaces();
            if(fs.length == 0)
                {
                    noWinner = false;
                    continue;
                }
            //display = this.getCurrentPlayer().name() + "'s Turn, awaiting input";
            //We cannnot make it in TS since it requires user input.

        }
    }


    getNextPlayer() : Player
    {
        if(this._currentPlayer+1 <= this._players.length-1)
            {
                this._currentPlayer = this._currentPlayer+1;
            }
        else this._currentPlayer = 0;

        return this._players[this._currentPlayer];
    }

    getCurrentPlayer() : Player
    {
        return this._players[this._currentPlayer];
    }

    // display() : any
    // {
    //     this._display;
    // }
}