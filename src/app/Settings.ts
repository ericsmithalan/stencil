import { ThemeManager } from "@app";
import { IAppTheme } from "@models";

export class Settings {
    private static _themeManager: ThemeManager;

    public static get themeManager(): ThemeManager {
        if (!this._themeManager) {
            this._themeManager = new ThemeManager();
        }

        return this._themeManager;
    }

    public static get theme(): IAppTheme {
        return this.themeManager.current;
    }
}
