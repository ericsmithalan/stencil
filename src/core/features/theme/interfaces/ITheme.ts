import { IAppColors, IAppFonts } from "@stencil.features/theme/interfaces";

export interface ITheme {
    id: string;
    fonts: IAppFonts;
    colors: IAppColors;
}
