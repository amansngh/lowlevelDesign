class Player {
    private _username : string;
    private _piece : Piece;

    constructor(username : string, piece : Piece)
    {
        this._username = username;
        this._piece = piece;
    }

    name() : string
    {
        return this._username;
    }
}