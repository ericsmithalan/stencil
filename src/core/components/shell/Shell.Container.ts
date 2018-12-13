import { ThemeColor, ITheme } from "@core/theme";

import { IRootStore, ShellStore, ThemeStore } from "@core/store";
import { Shell } from "@core/components";
import { connect } from "react-redux";

export interface IShellPropsFromState extends ShellStore.IState {
    theme: ITheme;
}

export interface IShellDispatchFromProps {
    changeTheme: (value: ThemeColor) => void;
    updateTitle: (value: string) => void;
}

const mapStateToProps = (state: IRootStore): IShellPropsFromState => ({
    title: state.shellStore.title,
    width: state.shellStore.width,
    height: state.shellStore.height,
    size: state.shellStore.size,
    isTitlebarVisible: state.shellStore.isTitlebarVisible,
    theme: state.themeStore.theme
});

const mapDispatchToProps = (dispatch: any): IShellDispatchFromProps => ({
    changeTheme: (value: ThemeColor) =>
        dispatch(ThemeStore.actions.changeTheme(value)),
    updateTitle: (value: string) =>
        dispatch(ShellStore.actions.changeTitle(value))
});

export const ShellContainer = connect<
    IShellPropsFromState,
    IShellDispatchFromProps
>(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
