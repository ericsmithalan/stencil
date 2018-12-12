import { IAppColors, IAppFonts } from "@core/theme/models";

export interface ITheme {
	id: string;
	fonts: IAppFonts;
	colors: IAppColors;
}
