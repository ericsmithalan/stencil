import * as React from "react";
import { IAppTheme } from "@core.interfaces";
import { Settings } from "@core.settings";
import { Logger } from "@core.utils";

export interface IControlProps {}
export interface IControlState {}

export abstract class Control<TProps extends IControlProps, TState extends IControlState> extends React.PureComponent<TProps, TState> {
    public static defaultProps: Partial<IControlProps> = {};
    private readonly _theme: IAppTheme;
    private readonly _logger: Logger;

    protected constructor(props: TProps) {
        super(props);
        this._theme = Settings.themeManager.current;
        this._logger = Settings.Logger;

        this.state = this.defaultState();
    }

    /** @virtual */
    protected defaultState(): TState {
        return {} as TState;
    }

    protected get theme(): IAppTheme {
        return this._theme;
    }

    protected get logger(): Logger {
        return this._logger;
    }

    public render() {
        return this.props.children;
    }
}
