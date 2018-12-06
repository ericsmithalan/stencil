import { IAppColors, IAppFonts, IAppUITheme } from "@interfaces";

export interface IAppTheme {
	id: string;
	fonts: IAppFonts;
	colors: IAppColors;
	uiStyles: IAppUITheme;
}
