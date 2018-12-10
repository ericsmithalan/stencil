//hack to bypass an issue
declare const window: any;

import * as React from "react";

import { ControlBase, IControlProps, IControlState, ThemeManager } from "@core";
import { DarkTheme, ThemeType } from "@core.themes";

// todo: I don't like this here but will figure out a better way later
import { Settings } from "@app";

export interface ITitlebarProps extends IControlProps {
    height: number;
    themeManager: ThemeManager;
}

export interface ITitlebarState extends IControlState {
    title: string | null;
    backgroundColor: string;
}

export class Titlebar extends ControlBase<ITitlebarProps, ITitlebarState> {
    public static defaultProps: Partial<ITitlebarProps> = {
        height: 30,
        theme: DarkTheme.getTheme()
    };

    //hack to bypass an issue
    private _remote = window.require("electron").remote;

    public constructor(props: ITitlebarProps) {
        super(props);

        this.state = {
            title: null,
            theme: this.props.theme
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
                <div className="titlebar-middle">{this._renderTitle()}</div>

                <div className="titlebar-right">
                    <button onClick={this.toggleTheme}>theme</button>
                    <button onClick={this.minimize}>min</button>
                    <button onClick={this.maximize}>max</button>
                    <button onClick={this.close}>close</button>
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
