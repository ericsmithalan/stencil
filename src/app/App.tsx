import "./app.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { EditorPage } from "@editor";
import { Shell, Launch } from "@app";

type AppPropTypes = {};

type AppStateTypes = {
    isLoaded: boolean;
};

export class App extends React.Component<AppPropTypes, AppStateTypes> {
    public constructor(props: AppPropTypes) {
        super(props);

        this.state = {
            isLoaded: false
        };
    }

    public componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 1000);
    }

    public render() {
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
                <Shell>
                    <Switch>
                        <Route exact={true} path="/" component={EditorPage} />
                        <Route path="/home" component={EditorPage} />
                    </Switch>
                </Shell>
            </BrowserRouter>
        );
    }
}
