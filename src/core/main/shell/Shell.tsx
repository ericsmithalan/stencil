import * as React from "react";

import {
	ComponentBase,
	IComponentProps,
	IComponentState,
	ThemeManager
} from "@core";

import { DarkTheme } from "@core.themes";
import { Titlebar } from "@core.main";

export interface IShellProps extends IComponentProps {
	titlebarHeight: number;
	title: string;
	themeManager: ThemeManager;
}

export interface IShellState extends IComponentState {
	title: string;
	isTitlebarVisible: boolean;
}

export class Shell extends ComponentBase<IShellProps, IShellState> {
	public static defaultProps: Partial<IShellProps> = {
		titlebarHeight: 30,
		theme: DarkTheme.getTheme()
	};

	private _titlebar: React.RefObject<Titlebar>;

	public constructor(props: IShellProps) {
		super(props);

		this._titlebar = React.createRef();

		this.state = {
			title: props.title,
			isTitlebarVisible: false,
			theme: props.theme
		} as IShellState;
	}

	public set isTitlebarVisible(value: boolean) {
		this.setState({ isTitlebarVisible: value });
	}

	public get titlebar(): Titlebar {
		return this._titlebar.current as Titlebar;
	}

	public render() {
		const { uiStyles, colors } = this.state.theme;

		return (
			<div
				style={{ backgroundColor: uiStyles.windowColor }}
				className="shell"
			>
				<div
					style={{
						height: this.props.titlebarHeight,
						display: this.state.isTitlebarVisible ? "block" : "none"
					}}
					className="shell-titlebar"
				>
					<Titlebar
						themeManager={this.props.themeManager}
						theme={this.state.theme}
						height={this.props.titlebarHeight}
						ref={this._titlebar}
					/>
				</div>
				<div className="shell-content">{this.props.children}</div>
			</div>
		);
	}
}
