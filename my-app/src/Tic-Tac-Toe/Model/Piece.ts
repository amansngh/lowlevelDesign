
class Piece implements IPiece
{
    private _value : PieceType;
    constructor(value : PieceType)
    {
        this._value = value;
    }

    value(): PieceType {
        return this._value;
    }
}