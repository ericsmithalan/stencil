import { ThemeColor, ITheme, DarkTheme, LightTheme } from "@features/theme";

export class Theme {
    private _current: ITheme;
    private _color: ThemeColor;

    public constructor() {
        this.setTheme(ThemeColor.Dark);
    }

    public setTheme(name: ThemeColor): void {
        switch (name) {
            case "dark":
                this._current = DarkTheme.getTheme();
                break;
            case "light":
                this._current = LightTheme.getTheme();
                break;
            default:
                throw new Error("end of range");
        }

        this._color = name;
    }

    public get color(): ThemeColor {
        return this._color;
    }

    public get current(): ITheme {
        return this._current;
    }
}
