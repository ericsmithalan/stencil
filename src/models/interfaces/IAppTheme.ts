import { IAppFonts, IAppColors, IAppUITheme } from "src/models";

export interface IAppTheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
    uiStyles: IAppUITheme;
}
