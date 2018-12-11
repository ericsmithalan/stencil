import * as React from "react";

import {
    ComponentBase,
    IComponentProps,
    IComponentState
} from "@stencil.components/index";

import { Titlebar } from "@stencil.features/electron";

export interface IShellProps extends IComponentProps {
    titlebarHeight: number;
    title: string;
}

export interface IShellState extends IComponentState {
    title: string;
    isTitlebarVisible: boolean;
}

export class Shell extends ComponentBase<IShellProps, IShellState> {
    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();

        this.state = {
            title: props.title,
            isTitlebarVisible: false
        } as IShellState;
    }

    public set isTitlebarVisible(value: boolean) {
        this.setState({ isTitlebarVisible: value });
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    public render() {
        return (
            <div style={{ backgroundColor: "black" }} className="shell">
                <div
                    style={{
                        height: this.props.titlebarHeight,
                        display: this.state.isTitlebarVisible ? "block" : "none"
                    }}
                    className="shell-titlebar"
                >
                    <Titlebar
                        height={this.props.titlebarHeight}
                        ref={this._titlebar}
                    />
                </div>
                <div className="shell-content">{this.props.children}</div>
            </div>
        );
    }
}
