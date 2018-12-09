import * as React from "react";
import { IAppTheme } from "@core.interfaces";
import { Settings } from "@core.settings";
import { Logger } from "@core.utils";

export interface IControlProps {}
export interface IControlState {}

export abstract class Control<TProps extends IControlProps, TState extends IControlState> extends React.PureComponent<TProps, TState> {
    public static defaultProps: Partial<IControlProps> = {};
    public static defaultState: IControlState = {};
    private readonly _theme: IAppTheme;
    private readonly _logger: Logger;
    private _isLoaded: boolean;

    protected constructor(props: TProps) {
        super(props);
        this._theme = Settings.themeManager.current;
        this._logger = Settings.Logger;

        this._isLoaded = false;
    }

    /** @virtual */
    protected loaded(): void {}

    /** @virtual */
    protected willLoad(): void {}

    /** @virtual */
    protected unLoaded(): void {}

    public componentWillMount() {
        this.willLoad();
    }

    public componentDidMount() {
        this.loaded();
    }

    public componentWillUnmount() {
        this.unLoaded();
    }

    protected get isLoaded(): boolean {
        return this._isLoaded;
    }

    protected set isLoaded(value: boolean) {
        this._isLoaded = value;
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
