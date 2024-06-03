import { AloggerProcessor } from "./AloggerProcessor";
import { LogType } from "./LogType";

export default class InfoLogProcessor extends AloggerProcessor
{
    constructor(nextLogProcessor : AloggerProcessor)
    {
        super(nextLogProcessor);
        this._logType = LogType.INFO;
    }

    log(logType : LogType, message : string) : string
    {
        if(this._logType == logType)
            {
                var logMessage = "INFO : " + message + "\n";
                return logMessage;
            }
        else return super.log(logType, message);
    }
}