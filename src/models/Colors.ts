import { IMonoColorScale, IAlertColorScale, IInteractiveColorScale, IAppColors } from "src/models";

export class Colors implements IAppColors {
    private _chrome: IMonoColorScale;
    private _base: IMonoColorScale;
    private _accent: IMonoColorScale;
    private _alert: IAlertColorScale;
    private _icon: IInteractiveColorScale;

    public constructor(props?: IAppColors) {
        if (props) {
            this.chrome = props.chrome;
            this.base = props.base;
            this.accent = props.accent;
            this.alert = props.alert;
            this.icon = props.icon;
        }
    }

    public get chrome(): IMonoColorScale {
        return this._chrome;
    }

    public set chrome(value: IMonoColorScale) {
        this._chrome = value;
    }

    public get base(): IMonoColorScale {
        return this._base;
    }

    public set base(value: IMonoColorScale) {
        this._base = value;
    }

    public get accent(): IMonoColorScale {
        return this._accent;
    }

    public set accent(value: IMonoColorScale) {
        this._accent = value;
    }

    public get alert(): IAlertColorScale {
        return this._alert;
    }

    public set alert(value: IAlertColorScale) {
        this._alert = value;
    }

    public get icon(): IInteractiveColorScale {
        return this._icon;
    }

    public set icon(value: IInteractiveColorScale) {
        this._icon = value;
    }
}
