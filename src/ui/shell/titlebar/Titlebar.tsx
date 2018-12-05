import * as React from "react";
import "./titlebar.css";
import { client } from "@client";
import { app } from "electron";

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

    private _minimizeButton: React.RefObject<HTMLAnchorElement>;
    private _maximizeButton: React.RefObject<HTMLAnchorElement>;
    private _closeButton: React.RefObject<HTMLAnchorElement>;

    public constructor(props: TitlebarPropTypes) {
        super(props);

        this._minimizeButton = React.createRef();
        this._maximizeButton = React.createRef();
        this._closeButton = React.createRef();

        this.state = {
            title: null
        };
    }

    public get minimizeButton(): HTMLAnchorElement {
        return this._minimizeButton.current as HTMLAnchorElement;
    }

    public get maximizeButton(): HTMLAnchorElement {
        return this._maximizeButton.current as HTMLAnchorElement;
    }

    public get closeButton(): HTMLAnchorElement {
        return this._closeButton.current as HTMLAnchorElement;
    }

    public setTitle(value: string | null) {
        if (this.state.title != value) {
            this.setState({ title: value });
        }
    }

    public render() {
        return (
            <div style={{ height: this.props.height }} className="titlebar">
                <div className="left">
                    <svg viewBox="0,0, 30,30">
                        <rect width="30" height="30" fill="#000000" />
                    </svg>
                </div>
                <div className="middle">{this._renderTitle()}</div>
                <div className="right">
                    <a href="#" onClick={this._minimize}>
                        min
                    </a>
                    <a href="#" onClick={this._maximize}>
                        max
                    </a>
                    <a href="#" onClick={this._close}>
                        close
                    </a>
                </div>
            </div>
        );
    }

    private _close(event: React.MouseEvent) {
        client.close();
    }
    private _maximize(event: React.MouseEvent) {
        client.maximize();
    }
    private _minimize(event: React.MouseEvent) {
        client.minimize();
    }

    private _renderTitle(): JSX.Element | null {
        if (this.state.title) {
            return <div className="title">{this.state.title}</div>;
        }

        return null;
    }
}
