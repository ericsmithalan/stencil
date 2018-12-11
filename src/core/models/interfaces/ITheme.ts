import { IAppColors, IAppFonts } from "@core.models";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
}
