import { LudoPiece } from "./Piece";

export default class LudoPlayer {
    _id : string;
    _name : string;
    _currentPosition : number;
    _pieceType : LudoPiece;

    constructor(id : string, name : string, pieceType : LudoPiece)
    {
        this._id = id;
        this._name = name;
        this._currentPosition = -1; 
        this._pieceType = pieceType;
    }
}