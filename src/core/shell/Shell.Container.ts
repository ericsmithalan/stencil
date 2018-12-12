import { ThemeColor, ThemeStore } from "@core/theme";

import { IRootState } from "@core/store";
import { Shell } from "@core/shell";
import { ShellStore } from "@core/shell";
import { connect } from "react-redux";

interface IPropsFromState {
	shellState: ShellStore.IState;
	themeState: ThemeStore.IState;
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
		dispatch(ThemeStore.actions.changeTheme(value)),
	updateTitle: (value: string) =>
		dispatch(ShellStore.actions.changeTitle(value))
});

export const ShellContainer = connect<IPropsFromState, IDispatchFromProps>(
	mapStateToProps,
	mapDispatchToProps
)(Shell);
