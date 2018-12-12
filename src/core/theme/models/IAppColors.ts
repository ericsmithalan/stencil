import {
	IAlertColorScale,
	IInteractiveColorScale,
	IMonoColorScale
} from "@core/theme/models";

export interface IAppColors {
	chrome: IMonoColorScale;
	base: IMonoColorScale;
	accent: IMonoColorScale;
	icon: IInteractiveColorScale;
	alert: IAlertColorScale;
	font: IMonoColorScale;
}
