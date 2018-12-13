import * as React from "react";

import { ControlBase, IControlProps, IControlState } from "@core/components";
import { ShellStore, Titlebar } from "@core/shell";
import { ThemeColor, ThemeStore } from "@core/theme";

/** PROPS */
export interface IShellProps extends IControlProps {
    titlebarHeight: number;
    shellState: ShellStore.IState;
    themeState: ThemeStore.IState;
    changeTheme(value: ThemeColor): void;
}

/** STATE */
export interface IShellState extends IControlState {}

/** THEME */
export interface IShellTheme {
    backgroundColor: string;
    titlebarHeight: number;
}

/** SHELL */
export class Shell extends ControlBase<IShellProps, IShellState> {
    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();
    }

    public static defaultProps: Partial<IShellProps> = {
        titlebarHeight: 30
    };

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    protected loaded() {
        super.loaded();
        console.log("props", this.props);
    }

    public render() {
        const { colors } = this.props.themeState.theme;

        const shellTheme: IShellTheme = {
            backgroundColor: colors.chrome.high,
            titlebarHeight: 30
        };

        return (
            <div
                style={{ backgroundColor: shellTheme.backgroundColor }}
                className="shell"
            >
                <div
                    style={{
                        height: shellTheme.titlebarHeight,
                        display: this.props.shellState.isTitlebarVisible
                            ? "block"
                            : "hidden"
                    }}
                    className="shell-titlebar"
                >
                    <Titlebar
                        onThemeChanged={() => this._handleThemeChange()}
                        theme={this.props.themeState.theme}
                        height={shellTheme.titlebarHeight}
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
