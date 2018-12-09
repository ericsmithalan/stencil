import { IAppTheme } from "@core.interfaces";
import { DarkTheme, LightTheme } from "src/core/themes";
import { ThemeType } from "@core.enums";

export class ThemeManager {
    private _current: IAppTheme;

    public constructor() {
        this._current = DarkTheme.getTheme();
    }

    public setTheme(name: ThemeType): void {
        if (this._current.id !== name) {
            switch (name) {
                case "dark":
                    this._current = DarkTheme.getTheme();
                    break;
                case "light":
                    this._current = LightTheme.getTheme();
                    break;
                default:
                    this._current = DarkTheme.getTheme();
                    break;
            }
        }
    }

    public get currentId(): string {
        return this._current.id;
    }

    public get current(): IAppTheme {
        return this._current;
    }
}
