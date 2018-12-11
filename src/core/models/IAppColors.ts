import {
    IAlertColorScale,
    IInteractiveColorScale,
    IMonoColorScale
} from "@core.models";

export interface IAppColors {
    chrome: IMonoColorScale;
    base: IMonoColorScale;
    accent: IMonoColorScale;
    icon: IInteractiveColorScale;
    alert: IAlertColorScale;
    font: IMonoColorScale;
}
