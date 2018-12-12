import { IAppColors, IAppFonts } from "@core/theme/interfaces";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
}
