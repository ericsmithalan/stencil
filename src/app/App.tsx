"use strict";

import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    PureComponentBase,
    IPureComponentProps,
    IPureComponentState
} from "@components/index";

import { EditorPage } from "@app/pages";
import { ShellContainer, Shell } from "@features/electron/window/shell/Shell";

export interface IAppProps extends IPureComponentProps {}

export interface IAppState extends IPureComponentState {}

export class App extends PureComponentBase<IAppProps, IAppState> {
    private _shellRef: React.RefObject<Shell>;

    public constructor(props: IAppProps) {
        super(props);

        this._shellRef = React.createRef();
    }

    public static defaultProps: Partial<IAppProps> = {};

    protected loaded() {
        super.loaded();
    }

    protected unLoaded() {
        super.unLoaded();
    }

    public render() {
        return (
            <ShellContainer ref={this._shellRef}>
                {this._renderContent()}
            </ShellContainer>
        );
    }

    private _renderContent(): JSX.Element {
        return this._renderApp();
    }

    private _renderApp(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={(props) => <EditorPage {...props} />}
                    />
                    <Route
                        exact={true}
                        path="/home"
                        render={(props) => <EditorPage {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
