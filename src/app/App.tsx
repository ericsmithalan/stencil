import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Launch, Shell } from "@app";

import { EditorPage } from "@editor";
import { Settings } from "@settings";

type AppPropTypes = {};

type AppStateTypes = {
	isLoaded: boolean;
	themeId: string;
};

export class App extends React.Component<AppPropTypes, AppStateTypes> {
	private _shellRef: React.RefObject<Shell>;

	public constructor(props: AppPropTypes) {
		super(props);

		Settings.themeManager.setTheme("dark");

		this._shellRef = React.createRef();

		this.state = {
			isLoaded: false,
			themeId: "dark"
		};
	}

	public componentDidMount() {
		const shell = this._shellRef.current as Shell;

		//simulate loading...
		setTimeout(() => {
			shell.isTitlebarVisible = true;
			shell.titlebar.setTitle("hi");
			this.setState({ isLoaded: true });
		}, 1000);

		// setTimeout(() => {
		//     Settings.themeManager.setTheme("dark");
		//     this.setState({ themeId: "dark" });
		// }, 3000);
	}

	public render() {
		return <Shell ref={this._shellRef}>{this._renderContent()}</Shell>;
	}

	private _renderContent(): JSX.Element {
		if (this.state.isLoaded) {
			return this._renderApp();
		} else {
			return this._renderLaunchScreen();
		}
	}

	private _renderLaunchScreen(): JSX.Element {
		return <Launch />;
	}

	private _renderApp(): JSX.Element {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact={true} path="/" component={EditorPage} />
					<Route path="/home" component={EditorPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}
