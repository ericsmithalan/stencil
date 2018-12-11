import * as React from "react";
import { connect } from "react-redux";
import { IRootState } from "@stencil.store";

import { ComponentBase } from "@stencil.components/index";

import { Titlebar, IShellState, IShellProps } from "@stencil.features/electron";

export class Shell extends ComponentBase<IShellProps, IShellState> {
    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();

        this.state = {
            isTitlebarVisible: false
        } as IShellState;
    }

    public set isTitlebarVisible(value: boolean) {
        this.setState({ isTitlebarVisible: value });
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    protected loaded() {
        super.loaded();

        console.log(this.props);
    }

    public render() {
        return (
            <div style={{ backgroundColor: "red" }} className="shell">
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

const mapStateToProps = (state: IRootState) => ({
    theme: state.theme,
    shell: state.shell
});

const mapDispatchToProps = (dispatch: any) => ({
    changeTheme: () => dispatch(dispatch.theme.changeTheme(dispatch)),
    updateTitle: () => dispatch(dispatch.shell.updateTitle(dispatch))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
