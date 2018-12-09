import * as React from "react";
import { IAppTheme } from "@core.interfaces";
import { Settings } from "src/app/Settings";

export interface IPageProps {}

export interface IPageState {}

export abstract class PageBase<TProps extends IPageProps, TState extends IPageState> extends React.Component<TProps, TState> {
    public static defaultProps: IPageProps = {};
    private readonly _theme: IAppTheme;

    public constructor(props: TProps) {
        super(props);

        this._theme = Settings.themeManager.current;
    }

    /** @virtual */
    protected willLoad(): void {}

    /** @virtual */
    protected loaded(): void {}

    /** @virtual */
    protected unLoaded(): void {}

    /** @final */
    public componentWillMount() {
        this.willLoad();
    }

    /** @final */
    public componentDidMount() {
        this.loaded();
    }

    /** @final */
    public componentWillUnmount() {
        this.unLoaded();
    }

    protected get theme(): IAppTheme {
        return this._theme;
    }
}
