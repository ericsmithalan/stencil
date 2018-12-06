import "./shell.css";

import * as React from "react";

import { Titlebar } from "@app";
import { Settings } from "@settings";
import { IAppTheme } from "@models";

type ShellPropTypes = {
    titlebarHeight: number;
};

type ShellStateTypes = {};

export class Shell extends React.Component<ShellPropTypes, ShellStateTypes> {
    public static defaultProps: Partial<ShellPropTypes> = {
        titlebarHeight: 30
    };

    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: ShellPropTypes) {
        super(props);

        this._titlebar = React.createRef();
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    public componentDidMount() {
        this.titlebar.setTitle("cool title dude");
    }

    public render() {
        const { uiStyles } = Settings.themeManager.current;

        return (
            <div style={{ backgroundColor: uiStyles.windowColor }} className="shell">
                <div style={{ height: this.props.titlebarHeight }} className="shell-titlebar">
                    <Titlebar height={this.props.titlebarHeight} ref={this._titlebar} />
                </div>
                <div className="shell-content">{this.props.children}</div>
            </div>
        );
    }
}
