import { ILogger, LogLevel } from "@core/logger";

export type LoggerOptionTypes = {
    isEnabled: boolean;
};

export class LoggerService implements ILogger {
    private static _defaultOptions: LoggerOptionTypes = {
        isEnabled: true
    };

    private readonly _options: LoggerOptionTypes;

    public constructor(options?: LoggerOptionTypes) {
        this._options = Object.assign(
            LoggerService.defaultOptions,
            options || {}
        );
    }

    public static get defaultOptions(): LoggerOptionTypes {
        return this._defaultOptions;
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
