import { ThemeHelpers } from "@core.utils";
import { IAppTheme, IMonoColorScale } from "@core.interfaces";

export class LightTheme {
    public static getTheme(): IAppTheme {
        const chrome: IMonoColorScale = {
            high: "#222222",
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

        const accent: IMonoColorScale = {
            high: "#126ef5",
            highMedium: "#3885f7",
            medium: "#5e9cf9",
            lowMedium: "#83b3fa",
            low: "#a9cafc"
        };

        const theme: IAppTheme = {
            id: "light",
            colors: {
                chrome: chrome,
                base: base,
                accent: accent,
                alert: ThemeHelpers.defaultAlertColors(),
                icon: ThemeHelpers.defaultIconColors(chrome, accent),
                font: base
            },
            fonts: ThemeHelpers.defaultFontStyles(),
            uiStyles: {
                windowColor: chrome.high,
                toobarColor: chrome.high,
                titlebarButtonTheme: {
                    default: chrome.medium,
                    selected: chrome.high,
                    hover: chrome.highMedium,
                    press: chrome.highMedium
                },
                titlebarButtonIconTheme: {
                    default: base.medium,
                    selected: base.high,
                    hover: base.highMedium,
                    press: base.highMedium
                }
            }
        };

        return theme;
    }
}
