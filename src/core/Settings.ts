import { IAppTheme } from "@core.interfaces";
import { ThemeManager } from "@app.theme";
import { Logger } from "@core.utils";

export class Settings {
    private static _themeManager: ThemeManager;
    private static _logger: Logger;

    public static get themeManager(): ThemeManager {
        if (!this._themeManager) {
            this._themeManager = new ThemeManager();
        }

        return this._themeManager;
    }

    public static get Logger(): Logger {
        if (!this._logger) {
            this._logger = new Logger();
        }

        return this._logger;
    }
}
