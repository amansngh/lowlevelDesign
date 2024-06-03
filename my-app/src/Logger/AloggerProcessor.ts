import { LogType } from "./LogType";

export abstract class AloggerProcessor{
    _logType : LogType;
    _nextProcessor: AloggerProcessor;

    constructor(nextProcessor : AloggerProcessor)
    {
        this._nextProcessor = nextProcessor;
    }

    log(logType : LogType, message : string) : string
    {
        if(this._nextProcessor != null)
            {
                return this._nextProcessor.log(logType, message);
            }
    }
}