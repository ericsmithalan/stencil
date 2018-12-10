//hack to bypass an issue
declare const window: any;

import * as React from "react";

import { ControlBase, IControlProps, IControlState, ThemeManager } from "@core";

import { ThemeType } from "@core.themes";

export interface ITitlebarProps extends IControlProps {
	height: number;
	themeManager: ThemeManager;
}

export interface ITitlebarState extends IControlState {
	title: string | null;
	backgroundColor: string;
}

export class Titlebar extends ControlBase<ITitlebarProps, ITitlebarState> {
	public static defaultProps: Partial<ITitlebarProps> = {
		height: 30
	};

	//hack to bypass an issue
	private _remote = window.require("electron").remote;

	public constructor(props: ITitlebarProps) {
		super(props);

		this.state = {
			title: null
		} as ITitlebarState;
	}

	public get currentWindow(): Electron.BrowserWindow {
		return this._remote.getCurrentWindow();
	}

	public setTitle(value: string | null) {
		if (this.state.title != value) {
			this.setState({ title: value });
		}
	}

	protected close = () => {
		this.currentWindow.close();
	};

	protected maximize = () => {
		this.currentWindow.maximize();
	};

	protected minimize = () => {
		this.currentWindow.minimize();
	};

	protected toggleTheme = () => {
		if (this.props.themeManager.current.id === ThemeType.Light) {
			this.props.themeManager.setTheme(ThemeType.Dark);
		} else {
			this.props.themeManager.setTheme(ThemeType.Light);
		}
	};

	public render() {
		return (
			<div
				style={{
					height: this.props.height,
					backgroundColor: this.theme.uiStyles.toobarColor,
					color: this.theme.colors.font.medium
				}}
				className="titlebar"
			>
				<div className="titlebar-middle">{this._renderTitle()}</div>

				<div className="titlebar-right">
					<button onClick={this.toggleTheme}>theme</button>
					<button onClick={this.minimize}>min</button>
					<button onClick={this.maximize}>max</button>
					<button onClick={this.close}>close</button>
				</div>
			</div>
		);
	}

	private _renderTitle(): JSX.Element | null {
		if (this.state.title) {
			return <div className="title">{this.state.title}</div>;
		}

		return null;
	}
}
