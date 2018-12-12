import { IAppColors, IAppFonts } from "@features/theme/interfaces";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
}
