import * as React from "react";

import {
    ComponentBase,
    IComponentProps,
    IComponentState
} from "@components/index";
import { connect } from "react-redux";
import { ThemeRedux, Theme, ThemeColor } from "@features/theme";

import { Titlebar, ShellRedux } from "@features/electron";
import { IRootState } from "@store";

export interface IShellProps extends IComponentProps {
    titlebarHeight: number;
    shellState: ShellRedux.IState;
    themeState: ThemeRedux.IState;
    changeTheme(value: ThemeColor): void;
}

export interface IShellState extends IComponentState {}

export class Shell extends ComponentBase<IShellProps, IShellState> {
    private readonly _theme: Theme;

    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._theme = new Theme();
        this._titlebar = React.createRef();
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    protected loaded() {
        super.loaded();
        console.log(this._theme.color);
        console.log("props", this.props);
    }

    public render() {
        const { colors } = this.props.themeState.theme;

        const styles = {
            backgroundColor: colors.chrome.high
        };

        return (
            <div
                style={{ backgroundColor: styles.backgroundColor }}
                className="shell"
            >
                <div
                    style={{ height: this.props.titlebarHeight }}
                    className="shell-titlebar"
                >
                    <Titlebar
                        onThemeChanged={() => this._handleThemeChange()}
                        theme={this.props.themeState.theme}
                        height={this.props.titlebarHeight}
                        ref={this._titlebar}
                    />
                </div>
                <div className="shell-content">{this.props.children}</div>
            </div>
        );
    }

    private _handleThemeChange(): void {
        if (this.props.themeState.themeColor === ThemeColor.Light) {
            this.props.changeTheme(ThemeColor.Dark);
        } else {
            this.props.changeTheme(ThemeColor.Light);
        }

        console.log(this.props.themeState.themeColor);
    }
}

interface IPropsFromState {
    shellState: ShellRedux.IState;
    themeState: ThemeRedux.IState;
}

interface IDispatchFromProps {
    changeTheme: (value: ThemeColor) => void;
    updateTitle: (value: string) => void;
}

const mapStateToProps = (state: IRootState): IPropsFromState => ({
    shellState: state.shell,
    themeState: state.theme
});

const mapDispatchToProps = (dispatch: any): IDispatchFromProps => ({
    changeTheme: (value: ThemeColor) =>
        dispatch(ThemeRedux.actions.changeTheme(value)),
    updateTitle: (value: string) =>
        dispatch(ShellRedux.actions.changeTitle(value))
});

export const ShellContainer = connect<IPropsFromState, IDispatchFromProps>(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
