import {
    IAlertColorScale,
    IInteractiveColorScale,
    IMonoColorScale
} from "@stencil.features/theme/interfaces";

export interface IAppColors {
    chrome: IMonoColorScale;
    base: IMonoColorScale;
    accent: IMonoColorScale;
    icon: IInteractiveColorScale;
    alert: IAlertColorScale;
    font: IMonoColorScale;
}