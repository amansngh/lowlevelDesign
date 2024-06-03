import GameUtils from "../GameUtils";

export default class LudoBoard{
    _boardMap : Array<Array<number>>;
    _row : number;
    _col : number;

    constructor(row : number = 10, col : number = 10)
    {
        this._boardMap = new Array<Array<number>>(row);
        for(let i =0; i < row; i++)
        {
            this._boardMap[i] = new Array<number>(col);
            for(let j = 0; j < col; j++)
                {
                    this._boardMap[i][j] = 0;
                }
        }
        this._row = row;
        this._col = col;
    }

    addSnakes(snakeCount : number = 10)
    {
        this.verifyMaxSnakeLimitAsPerRowCol();
        for(let i = 0; i < snakeCount; i++)
            {
                var snakePlaced = false;
                while(!snakePlaced)
                    {
                        var snakePlacement = GameUtils.getRandomNumber(11, 99); //Tight Coupling
                        var row = Math.floor(snakePlacement/10);
                        var col = snakePlacement%10;
                        if(this._boardMap[row][col] == 0)
                        {
                            var minusCount = GameUtils.getRandomNumber(5, snakePlacement - 10); //Tight Coupling
                            this._boardMap[row][col] = minusCount;
                            snakePlaced = true;
                        }
                    }
            }
    }

    addLadders(ladderCount : number = 10)
    {
        this.verifyMaxLadderLimitAsPerRowCol();
        for(let i = 0; i < ladderCount; i++)
            {
                var ladderPlaced = false;
                while(!ladderPlaced)
                    {
                        var ladderPlacement = GameUtils.getRandomNumber(11, 80); //Tight Coupling
                        var row = Math.floor(ladderPlacement/10);
                        var col = ladderPlacement%10;
                        if(this._boardMap[row][col] == 0)
                        {
                            var plusCount = GameUtils.getRandomNumber(ladderPlacement + 5, 95); //Tight Coupling
                            this._boardMap[row][col] = plusCount;
                            ladderPlaced = true;
                        }
                    }
            }
    }

    verifyMaxSnakeLimitAsPerRowCol() : boolean
    {
        return true;
    }

    verifyMaxLadderLimitAsPerRowCol() : boolean
    {
        return true;
    }

    displayBoard(){
        for(let i = 0; i < this._row; i++)
            {
                for(let j = 0; j < this._col; j++)
                    {
                        console.log(i + " , " + j + " = " + this._boardMap[i][j]);
                    }
            }
    }
}