import { IAppTheme, ILogger } from "@core.interfaces";
import { ThemeManager } from "@core";
import { Logger } from "@core.debug";

export class Settings {
    private static _themeManager: ThemeManager;
    private static _logger: ILogger;

    public static get themeManager(): ThemeManager {
        if (!this._themeManager) {
            this._themeManager = new ThemeManager();
        }

        return this._themeManager;
    }

    public static get logger(): ILogger {
        if (!this._logger) {
            this._logger = new Logger();
        }

        return this._logger;
    }
}
