import { AloggerProcessor } from "./AloggerProcessor";
import { LogType } from "./LogType";

export class ErrorLogProcessor extends AloggerProcessor
{
    constructor(nextLogProcessor : AloggerProcessor)
    {
        super(nextLogProcessor);
        this._logType = LogType.ERROR;
    }

    log(logType : LogType, message : string) : string
    {
        if(this._logType == logType)
            {
                var logMessage = "ERROR : " + message + "\n";
                return logMessage;
            }
        else return super.log(logType, message);
    }
}