import { LogLevel } from "@core.enums";
import { ILogger } from "@core.interfaces";

export type LoggerOptionTypes = {
    isEnabled: boolean;
};

export class Logger implements ILogger {
    public static defaultOptions: LoggerOptionTypes = {
        isEnabled: true
    };

    private readonly _options: LoggerOptionTypes;

    public constructor(options?: LoggerOptionTypes) {
        this._options = Object.assign(Logger.defaultOptions, options || {});
    }

    public log(message: string, data?: object): void {
        this._log(LogLevel.Log, message, data);
    }

    public debug(message: string, data?: object): void {
        this._log(LogLevel.Debug, message, data);
    }

    public warn(message: string, data?: object): void {
        this._log(LogLevel.Warn, message, data);
    }

    public error(message: string, data?: object): void {
        this._log(LogLevel.Error, message, data);
    }

    public info(message: string, data?: object): void {
        this._log(LogLevel.Info, message, data);
    }

    private _log(level: LogLevel, message: string, data?: object): void {
        if (this._options.isEnabled) {
            if (data) {
                console[level](message, data);
            } else {
                console[level](message);
            }
        }
    }
}
