class floor{
    _floorNumber : number;
    _eb : ExternalButton;

    constructor(floorNumber : number, eb :ExternalButton)
    {
        this._floorNumber = floorNumber;
        this._eb = eb;
    }

    pressButton(dir : Direction )
    {
        this._eb._dispatcher.submitRequest(this._floorNumber, dir);
    }
}