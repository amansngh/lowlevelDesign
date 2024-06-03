
class Board 
{
    private _size : number;
    private _board : Piece[][];

    constructor(size : number)
    {
        this._size = size;
        //Initialize board;
        this._board = new Array<Array<Piece>>(size);
        for(let i = 0; i < size; i++)
            {
                this._board[i] = new Array<Piece>(size);
            }
    }

    printBoard() : Array<Array<string>>
    {
        let output : string[][]= [];
        for(let i = 0; i < this._size; i++)
        {
            for(let j = 0; j < this._size; j++)
                {
                    output[i][j] = this._board[i][j].value().toString();
                }
        }
        return output;
    }

    getFreeSpaces() : Array<string>
    {
        let freeSpaces : Array<string> = [];
        for(let i = 0; i < this._size; i++)
            {
                for(let j = 0; j < this._size; j++)
                    {
                        if(!this._board[i][j].value)
                            {
                                freeSpaces.push(i.toString()+","+j.toString());
                            } 
                    }
            }
        return freeSpaces;
    }
}