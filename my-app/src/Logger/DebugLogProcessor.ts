import { AloggerProcessor } from "./AloggerProcessor";
import { LogType } from "./LogType";
export default class DebugLogProcessor extends AloggerProcessor
{
    constructor(nextLogProcessor : AloggerProcessor)
    {
        super(nextLogProcessor);
        this._logType = LogType.DEBUG;
    }

    log(logType : LogType, message : string) : string
    {
        if(this._logType == logType)
            {
                var logMessage = "DEBUG : " + message + "\n";
                return logMessage;
            }
        else return super.log(logType, message);
    }
}