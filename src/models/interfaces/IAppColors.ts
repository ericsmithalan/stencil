import { IMonoColorScale, IAlertColorScale, IInteractiveColorScale } from "src/models";

export interface IAppColors {
    chrome: IMonoColorScale;
    base: IMonoColorScale;
    accent: IMonoColorScale;
    icon: IInteractiveColorScale;
    alert: IAlertColorScale;
    font: IMonoColorScale;
}
