import { IThemeService } from "@core.services";
import { ITheme } from "@core.models";
import { DarkTheme, LightTheme } from "@core.services";
import { BehaviorSubject } from "rxjs";

export enum ThemeType {
    Light = "light",
    Dark = "dark"
}

export class ThemeService implements IThemeService {
    private static _defaultTheme: ITheme;
    private _theme: BehaviorSubject<ITheme>;

    public constructor() {
        this.setTheme(ThemeService.defaultTheme.id as ThemeType);
    }

    public static get defaultTheme(): ITheme {
        if (!this._defaultTheme) {
            this._defaultTheme = DarkTheme.getTheme();
        }

        return this._defaultTheme;
    }

    public setTheme(name: ThemeType): void {
        switch (name) {
            case "dark":
                this._theme.next(DarkTheme.getTheme());
                break;
            case "light":
                this._theme.next(LightTheme.getTheme());
                break;
            default:
                throw new Error("setTheme > themeType out of range");
        }
    }

    public toggle() {
        if (this.id === ThemeType.Dark) {
            this.setTheme(ThemeType.Light);
        } else {
            this.setTheme(ThemeType.Dark);
        }
    }

    public get theme(): BehaviorSubject<ITheme> {
        return this._theme;
    }

    public get id(): ThemeType {
        return this.theme.getValue().id as ThemeType;
    }
}
