//hack to bypass an issue
declare const window: any;

import "./titlebar.css";

import * as React from "react";

type TitlebarPropTypes = {
    height: number;
};

type TitlebarStateTypes = {
    title: string | null;
};

export class Titlebar extends React.Component<TitlebarPropTypes, TitlebarStateTypes> {
    public static defaultProps: Partial<TitlebarPropTypes> = {
        height: 30
    };

    //hack to bypass an issue
    private _remote = window.require("electron").remote;

    public constructor(props: TitlebarPropTypes) {
        super(props);

        this.state = {
            title: null
        };
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
        console.log("close clicked");
        this.currentWindow.close();
    };

    protected maximize = () => {
        console.log("max clicked");
        this.currentWindow.maximize();
    };

    protected minimize = () => {
        console.log("min clicked");
        this.currentWindow.minimize();
    };

    public render() {
        return (
            <div style={{ height: this.props.height }} className="titlebar">
                <div className="titlebar-left">
                    <svg viewBox="0,0, 30,30">
                        <rect width="30" height="30" fill="#000000" />
                    </svg>
                </div>
                <div className="titlebar-middle">{this._renderTitle()}</div>
                <div className="titlebar-right">
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
