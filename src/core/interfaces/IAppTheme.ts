import { IAppColors, IAppFonts, IAppUITheme } from "@core.interfaces";

export interface IAppTheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
    uiStyles: IAppUITheme;
}
