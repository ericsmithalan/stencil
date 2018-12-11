import { IAppColors, IAppFonts, IAppUITheme } from "@core.themes";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
    uiStyles: IAppUITheme;
}
