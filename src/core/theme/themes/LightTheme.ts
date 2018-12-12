import { ITheme, IMonoColorScale } from "@core/theme";

import { ThemeHelpers } from "@core/theme";

export class LightTheme {
    public static getTheme(): ITheme {
        const chrome: IMonoColorScale = {
            high: "#f2f2f2",
            highMedium: "#e5e5e5",
            medium: "#cccccc",
            lowMedium: "#999999",
            low: "#666666"
        };

        const base: IMonoColorScale = {
            high: "#222222",
            highMedium: "#333333",
            medium: "#444444",
            lowMedium: "#555555",
            low: "#666666"
        };

        const accent: IMonoColorScale = {
            high: "#126ef5",
            highMedium: "#3885f7",
            medium: "#5e9cf9",
            lowMedium: "#83b3fa",
            low: "#a9cafc"
        };

        const theme: ITheme = {
            id: "light",
            colors: {
                chrome: chrome,
                base: base,
                accent: accent,
                alert: ThemeHelpers.defaultAlertColors(),
                icon: ThemeHelpers.defaultIconColors(chrome, accent),
                font: base
            },
            fonts: ThemeHelpers.defaultFontStyles()
        };

        return theme;
    }
}
