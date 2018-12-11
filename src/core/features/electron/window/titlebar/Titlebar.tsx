//hack to bypass an issue
declare const window: any;

import * as React from "react";

import {
    PureComponentBase,
    IPureComponentProps,
    IPureComponentState,
    IconButton
} from "@stencil.components/index";

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
            title: null
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

    protected close() {
        this.currentWindow.close();
    }

    protected maximize() {
        this.currentWindow.maximize();
    }

    protected minimize() {
        this.currentWindow.minimize();
    }

    protected toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    protected toggleTheme = () => {
        // Settings.themeService.toggle();
    };

    public render() {
        return (
            <div
                style={{
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
        if (this.state.title) {
            return <div className="title">{this.state.title}</div>;
        }

        return null;
    }
}
