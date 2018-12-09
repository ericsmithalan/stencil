import {
	IAlertColorScale,
	IInteractiveColorScale,
	IMonoColorScale
} from "@core.themes";

export interface IAppColors {
	chrome: IMonoColorScale;
	base: IMonoColorScale;
	accent: IMonoColorScale;
	icon: IInteractiveColorScale;
	alert: IAlertColorScale;
	font: IMonoColorScale;
}