import * as React from "react";
import { IAppTheme } from "@core.interfaces";
import { Settings } from "@core.settings";

export interface IControlProps {}
export interface IControlState {}

export class Control<TProps extends IControlProps, TState extends IControlState> extends React.PureComponent<TProps, TState> {
    public static defaultProps: Partial<IControlProps> = {};
    private readonly _theme: IAppTheme;

    protected constructor(props: TProps) {
        super(props);

        this._theme = Settings.themeManager.current;
    }

    protected get theme(): IAppTheme {
        return this._theme;
    }

    public render() {
        return <div>base UI control</div>;
    }
}
