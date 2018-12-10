import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ControlBase, IControlProps, IControlState, ThemeManager } from "@core";
import { EditorPage, LaunchPage } from "@app.pages";
import { IAppTheme, ThemeType } from "@core.themes";

import { ILogger } from "@core.debug";
import { Settings } from "@app";
import { Shell } from "@core.main";

export interface IAppProps extends IControlProps {}

export interface IAppState extends IControlState {
	isLoaded: boolean;
	themeId: string;
}

export class App extends ControlBase<IAppProps, IAppState> {
	public static defaultProps: IAppProps = {};
	private _shellRef: React.RefObject<Shell>;
	private _themeManager: ThemeManager;

	public constructor(props: IAppProps) {
		super(props);

		this._shellRef = React.createRef();

		this._themeManager = Settings.themeManager;
		this._themeManager.setTheme(ThemeType.Light);
		this._themeManager.currentId.subscribe((value) => {
			this._handleThemeChanged(value);
		});

		this.state = {
			isLoaded: false,
			themeId: "dark"
		} as IAppState;
	}

	public get theme(): IAppTheme {
		return this._themeManager.current;
	}

	public get logger(): ILogger {
		return Settings.logger;
	}

	protected loaded() {
		const shell = this._shellRef.current as Shell;

		//simulate loading...
		setTimeout(() => {
			shell.isTitlebarVisible = true;
			shell.titlebar.setTitle("title bar text");
			this.setState({
				isLoaded: true
			});
		}, 3000);
	}

	private _handleThemeChanged(value: ThemeType): void {
		this.setState({ themeId: value });
		console.log("theme", value, this.theme);
	}

	public render() {
		return (
			<Shell
				ref={this._shellRef}
				themeManager={this._themeManager}
				theme={this.theme}
				logger={Settings.logger}
			>
				{this._renderContent()}
			</Shell>
		);
	}

	private _renderContent(): JSX.Element {
		if (this.state.isLoaded) {
			return this._renderApp();
		} else {
			return this._renderLaunchScreen();
		}
	}

	private _renderLaunchScreen(): JSX.Element {
		return <LaunchPage theme={this.theme} logger={Settings.logger} />;
	}

	private _renderApp(): JSX.Element {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact={true}
						path="/"
						render={(props) => (
							<EditorPage
								{...props}
								theme={this.theme}
								logger={Settings.logger}
							/>
						)}
					/>
					<Route
						exact={true}
						path="/home"
						render={(props) => (
							<EditorPage
								{...props}
								theme={this.theme}
								logger={Settings.logger}
							/>
						)}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}
