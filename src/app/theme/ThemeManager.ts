import {
    IAppFonts,
    IAppTheme,
    IMonoColorScale,
    IAlertColorScale,
    IInteractiveColorScale,
    IFontFamilies,
    IFontSizes
} from "@models";

type AvailableThemes = "dark" | "light";

export class ThemeManager {
    private _dark: IAppTheme;
    private _light: IAppTheme;
    private _current: IAppTheme;

    public constructor() {}

    public setTheme(name: AvailableThemes) {
        switch (name) {
            case "dark":
                this.current = this.dark;
                break;
            case "light":
                this.current = this.dark;
                break;
            default:
                this.current = this.dark;
                break;
        }
    }

    public get current(): IAppTheme {
        if (!this._current) {
            this.setTheme("dark");
        }

        return this._current;
    }

    public set current(value: IAppTheme) {
        if (this._current.id !== value.id) {
            this.current = value;
        }
    }

    public get dark(): IAppTheme {
        if (!this._dark) {
            this._dark = this._createDarkTheme();
        }

        return this._dark;
    }

    public get light(): IAppTheme {
        if (!this._light) {
            this._light = this._createDarkTheme();
        }

        return this._light;
    }

    private _createDarkTheme(): IAppTheme {
        const chrome: IMonoColorScale = {
            high: "#f2f2f2",
            highMedium: "#e5e5e5",
            medium: "#cccccc",
            lowMedium: "#999999",
            low: "#666666"
        };

        const base: IMonoColorScale = {
            high: "#0d0d0d",
            highMedium: "#1a1a1a",
            medium: "#262626",
            lowMedium: "#333333",
            low: "#666666"
        };

        return {
            id: "dark",
            colors: {
                chrome: chrome,
                base: base,
                accent: this._defaultAccentColors(),
                alert: this._defaultAlertColors(),
                icon: this._defaultIconColors(chrome)
            },
            fonts: this._defaultFontStyles()
        };
    }

    private _createLightTheme(): IAppTheme {
        const chrome: IMonoColorScale = {
            high: "#0d0d0d",
            highMedium: "#1a1a1a",
            medium: "#262626",
            lowMedium: "#333333",
            low: "#666666"
        };

        const base: IMonoColorScale = {
            high: "#f2f2f2",
            highMedium: "#e5e5e5",
            medium: "#cccccc",
            lowMedium: "#999999",
            low: "#666666"
        };

        return {
            id: "dark",
            colors: {
                chrome: chrome,
                base: base,
                accent: this._defaultAccentColors(),
                alert: this._defaultAlertColors(),
                icon: this._defaultIconColors(chrome)
            },
            fonts: this._defaultFontStyles()
        };
    }

    private _defaultFontStyles(): IAppFonts {
        const families: IFontFamilies = {
            body: "'Libre Franklin', sans-serif",
            headers: "'Libre Franklin', sans-serif"
        };

        const sizes: IFontSizes = {
            h1: 48,
            h2: 32,
            h3: 28,
            h4: 24,
            h5: 18,
            h6: 16,
            small: 12,
            body: 1,
            default: 13
        };

        return {
            families: families,
            sizes: sizes
        };
    }

    private _defaultAlertColors(): IAlertColorScale {
        return {
            warning: "#bcb34f",
            success: "#4fbc7b",
            danger: "#e94b35",
            error: "#bc4f4f"
        };
    }

    private _defaultAccentColors(): IMonoColorScale {
        return {
            high: "#126ef5",
            highMedium: "#3885f7",
            medium: "#5e9cf9",
            lowMedium: "#83b3fa",
            low: "#a9cafc"
        };
    }

    private _defaultIconColors(chrome: IMonoColorScale): IInteractiveColorScale {
        return {
            default: chrome.medium,
            selected: chrome.high,
            hover: chrome.highMedium,
            press: chrome.highMedium
        };
    }
}
