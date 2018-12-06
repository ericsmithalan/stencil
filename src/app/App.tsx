import "./app.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { EditorPage } from "@editor";
import { Shell } from "@app";

export class App extends React.Component {
    public render() {
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
