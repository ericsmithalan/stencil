import { ThemeManager } from "@app";
import { IAppTheme } from "@models";

export class Settings {
    private static _themeManager: ThemeManager = new ThemeManager();

    public static get theme(): IAppTheme {
        return this._themeManager.current;
    }
}
