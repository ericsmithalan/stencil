import { IAppColors, IAppFonts, IAppUITheme } from "@core.themes";

export interface IAppTheme {
	id: string;
	fonts: IAppFonts;
	colors: IAppColors;
	uiStyles: IAppUITheme;
}
