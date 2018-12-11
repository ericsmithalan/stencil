import { DarkTheme, ITheme, LightTheme, ThemeType } from "@core.themes";

import { Subject } from "rxjs";

export class ThemeManager {
    private readonly _current: Subject<ITheme>;

    public constructor() {
        this._current = new Subject<ITheme>();
        this.setTheme(ThemeType.Dark);
    }

    public setTheme(name: ThemeType): void {
        switch (name) {
            case "dark":
                this._current.next(DarkTheme.getTheme());
                break;
            case "light":
                this._current.next(LightTheme.getTheme());
                break;
            default:
                this._current.next(DarkTheme.getTheme());
                break;
        }
    }

    public get current(): Subject<ITheme> {
        return this._current;
    }
}
