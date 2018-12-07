import { IAppTheme } from "@core.interfaces";
import { ThemeManager } from "@app.theme";

export class Settings {
    private static _themeManager: ThemeManager;

    public static get themeManager(): ThemeManager {
        if (!this._themeManager) {
            this._themeManager = new ThemeManager();
        }

        return this._themeManager;
    }
}
