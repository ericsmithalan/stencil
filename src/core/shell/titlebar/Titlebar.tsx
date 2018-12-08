//hack to bypass an issue
declare const window: any;

import * as React from "react";

import { MenuIcon } from "@core.icons";
import { Settings } from "@core.settings";

type TitlebarPropTypes = {
    height: number;
};

type TitlebarStateTypes = {
    title: string | null;
};

export interface ITitleBarTheme {
    focusColor: string;
    blurColor: string;
    buttonColor: string;
    titleColor: string;
}

export class Titlebar extends React.Component<TitlebarPropTypes, TitlebarStateTypes> {
    public static defaultProps: Partial<TitlebarPropTypes> = {
        height: 30
    };

    //hack to bypass an issue
    private _remote = window.require("electron").remote;

    private readonly _iconRef: React.RefObject<MenuIcon>;

    public constructor(props: TitlebarPropTypes) {
        super(props);

        this._iconRef = React.createRef();

        this.state = {
            title: null
        };
    }

    public get currentWindow(): Electron.BrowserWindow {
        return this._remote.getCurrentWindow();
    }

    private get _icon(): MenuIcon {
        return this._iconRef.current as MenuIcon;
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

    public render() {
        const { uiStyles, colors } = Settings.themeManager.current;

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
                    <MenuIcon ref={this._iconRef} />
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
