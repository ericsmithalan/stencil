import * as React from "react";

import { Titlebar } from "@core.electron";
import { ControlBase, IControlProps, IControlState } from "@core";

export interface IShellProps extends IControlProps {
    titlebarHeight: number;
    title: string;
}

export interface IShellState extends IControlState {
    title: string;
    isTitlebarVisible: boolean;
}

export class Shell extends ControlBase<IShellProps, IShellState> {
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

    public componentDidMount() {}

    public render() {
        return (
            <div style={{ backgroundColor: this.theme.uiStyles.windowColor }} className="shell">
                <div
                    style={{
                        height: this.props.titlebarHeight,
                        display: this.state.isTitlebarVisible ? "block" : "none"
                    }}
                    className="shell-titlebar"
                >
                    <Titlebar height={this.props.titlebarHeight} ref={this._titlebar} />
                </div>
                <div className="shell-content">{this.props.children}</div>
            </div>
        );
    }
}
