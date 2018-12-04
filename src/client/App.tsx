import "../styles/build/index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { EditorPage } from "./editor/index";

export class App extends React.Component {
	public render() {
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
