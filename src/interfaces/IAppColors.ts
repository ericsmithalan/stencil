import { IAlertColorScale, IInteractiveColorScale, IMonoColorScale } from "@interfaces";

export interface IAppColors {
	chrome: IMonoColorScale;
	base: IMonoColorScale;
	accent: IMonoColorScale;
	icon: IInteractiveColorScale;
	alert: IAlertColorScale;
	font: IMonoColorScale;
}
