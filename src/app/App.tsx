import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { EditorPage } from "@editor";
import { Shell, Launch } from "@app";
import { Settings } from "@settings";

type AppPropTypes = {};

type AppStateTypes = {
    isLoaded: boolean;
    themeId: string;
};

export class App extends React.Component<AppPropTypes, AppStateTypes> {
    public constructor(props: AppPropTypes) {
        super(props);

        Settings.themeManager.setTheme("light");

        this.state = {
            isLoaded: false,
            themeId: "light"
        };
    }

    public componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 1000);

        setTimeout(() => {
            Settings.themeManager.setTheme("dark");
            this.setState({ themeId: "dark" });
        }, 3000);
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
