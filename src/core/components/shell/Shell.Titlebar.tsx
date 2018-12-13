//hack to bypass an issue
declare const window: any;

import * as React from "react";

import {
    IPureControlProps,
    IPureControlState,
    IconButton,
    PureControlBase
} from "@core/components";

import { ITheme } from "@core/theme";

export interface ITitlebarProps extends IPureControlProps {
    height: number;
    theme: ITheme;
    title: string;
    onThemeChanged(): void;
}

export interface ITitlebarState extends IPureControlState {
    showMenu: boolean;
}

export interface ITitlebarTheme {
    backgroundColor: string;
    height: number;
}

export class Titlebar extends PureControlBase<ITitlebarProps, ITitlebarState> {
    __name = "Titlebar";
    //hack to bypass an issue
    private _remote = window.require("electron").remote;

    public constructor(props: ITitlebarProps) {
        super(props);

        this.state = {
            showMenu: false
        };
    }

    public static defaultProps: Partial<ITitlebarProps> = {
        height: 30
    };

    public get currentWindow(): Electron.BrowserWindow {
        return this._remote.getCurrentWindow();
    }

    public setTitle(value: string | null) {}

    protected close() {
        this.currentWindow.close();
    }

    protected maximize() {
        this.currentWindow.maximize();
    }

    protected minimize() {
        this.currentWindow.minimize();
    }

    protected toggleMenu() {}

    protected toggleTheme = () => {
        this.props.onThemeChanged();

        // Settings.themeService.toggle();
    };

    public render() {
        const { colors } = this.props.theme;

        const styles = {
            fontColor: colors.base.highMedium,
            backgroundColor: colors.chrome.high
        };

        return (
            <div
                style={{
                    color: styles.fontColor,
                    backgroundColor: styles.backgroundColor,
                    height: this.props.height
                }}
                className="titlebar"
            >
                <div className="titlebar-left">
                    <IconButton onClick={(e) => this.toggleMenu()} />
                </div>

                <div className="titlebar-middle">{this._renderTitle()}</div>

                <div className="titlebar-right">
                    <button onClick={(e) => this.toggleTheme()}>theme</button>
                    <button onClick={(e) => this.minimize()}>min</button>
                    <button onClick={(e) => this.maximize()}>max</button>
                    <button onClick={(e) => this.close()}>close</button>
                </div>

                <div
                    style={{
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
        if (this.props.title) {
            return <div className="title">{this.props.title}</div>;
        }

        return null;
    }
}
