import { IAppColors, IAppFonts, IAppUITheme } from "@core.models";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
    uiStyles: IAppUITheme;
}
