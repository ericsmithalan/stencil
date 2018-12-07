import * as React from "react";
import { Icon, IconSource } from "@core.icons";
import { SVG } from "@core.components";
import { IAppTheme } from "@core.interfaces";
import { Settings } from "@core.settings";

export interface IPageProps {}

export interface IPageState {}

export class Page<TProps extends IPageProps, TState extends IPageState> extends React.Component<TProps, TState> {
    public static defaultProps: IPageProps = {};
    private readonly _theme: IAppTheme;

    public constructor(props: TProps) {
        super(props);

        this._theme = Settings.themeManager.current;
    }

    /** @virtual */
    public componentWillMount() {}

    /** @virtual */
    public componentDidMount() {}

    protected get theme(): IAppTheme {
        return this._theme;
    }

    public render() {
        return this.props.children;
    }
}
