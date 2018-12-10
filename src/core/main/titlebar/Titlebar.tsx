//hack to bypass an issue
declare const window: any;

import * as React from "react";

import {
    PureComponentBase,
    IPureComponentProps,
    IPureComponentState,
    ThemeManager
} from "@core";
import { DarkTheme, ThemeType } from "@core.themes";

// todo: I don't like this here but will figure out a better way later
import { Settings } from "@app";

export interface ITitlebarProps extends IPureComponentProps {
    height: number;
}

export interface ITitlebarState extends IPureComponentState {
    title: string | null;
    showMenu: boolean;
}

export class Titlebar extends PureComponentBase<
    ITitlebarProps,
    ITitlebarState
> {
    public static defaultProps: Partial<ITitlebarProps> = {
        height: 30
    };

    //hack to bypass an issue
    private _remote = window.require("electron").remote;

    public constructor(props: ITitlebarProps) {
        super(props);

        this.state = {
            title: null,
            theme: this.props.theme || DarkTheme.getTheme()
        } as ITitlebarState;
    }

    public get currentWindow(): Electron.BrowserWindow {
        return this._remote.getCurrentWindow();
    }

    public setTitle(value: string | null) {
        if (this.state.title != value) {
            this.setState({ title: value });
        }
    }

    protected close = () => {
        this.currentWindow.close();
    };

    protected maximize = () => {
        this.currentWindow.maximize();
    };

    protected minimize = () => {
        this.currentWindow.minimize();
    };

    protected toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    protected toggleTheme = () => {
        if (this.props.theme.id === ThemeType.Light) {
            Settings.themeManager.setTheme(ThemeType.Dark);
        } else {
            Settings.themeManager.setTheme(ThemeType.Light);
        }
    };

    public render() {
        const { uiStyles, colors } = this.state.theme;

        return (
            <div
                style={{
                    height: this.props.height,
                    backgroundColor: uiStyles.toobarColor,
                    color: colors.font.medium
                }}
                className="titlebar"
            >
                <div className="titlebar-left">
                    <button onClick={this.toggleMenu}>menu</button>
                </div>

                <div className="titlebar-middle">{this._renderTitle()}</div>

                <div className="titlebar-right">
                    <button onClick={this.toggleTheme}>theme</button>
                    <button onClick={this.minimize}>min</button>
                    <button onClick={this.maximize}>max</button>
                    <button onClick={this.close}>close</button>
                </div>

                <div
                    style={{
                        backgroundColor: this.state.theme.uiStyles
                            .toolbarMenuColor,
                        top: this.props.height,
                        display: this.state.showMenu ? "block" : "none"
                    }}
                    className="title-bar-menu"
                >
                    menu
                </div>
            </div>
        );
    }

    private _renderTitle(): JSX.Element | null {
        if (this.state.title) {
            return <div className="title">{this.state.title}</div>;
        }

        return null;
    }
}
