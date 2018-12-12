import * as React from "react";

import { ComponentBase } from "@components/index";
import { connect } from "react-redux";
import { ITheme } from "@features/theme";

import { Titlebar, IShellProps, IShellState } from "@features/electron";

export class Shell extends ComponentBase<IShellProps, IShellState> {
    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    protected loaded() {
        super.loaded();

        console.log("props", this.props);
    }

    public render() {
        return (
            <div style={{ backgroundColor: "red" }} className="shell">
                <div
                    style={{
                        height: this.props.titlebarHeight
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

interface IPropsFromState {
    title: string;
    isTitlebarVisible: boolean;
}

interface IDispatchFromProps {
    changeTheme: (value: ITheme) => void;
    updateTitle: (value: string) => void;
}

const mapStateToProps = (state: IShellState): IPropsFromState => ({
    title: state.title,
    isTitlebarVisible: state.isTitlebarVisible
});

const mapDispatchToProps = (dispatch: any): IDispatchFromProps => ({
    changeTheme: () => dispatch(dispatch.theme.changeTheme(dispatch.theme)),
    updateTitle: () => dispatch(dispatch.shell.updateTitle(dispatch.shell))
});

export const ShellContainer = connect<
    IPropsFromState,
    IDispatchFromProps,
    IShellProps,
    IShellState
>(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
