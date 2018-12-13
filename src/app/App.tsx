"use strict";

import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    IPureControlProps,
    IPureControlState,
    PureControlBase,
    Shell,
    ShellContainer
} from "@core/components";

import { EditorContainer } from "@app/pages";

export interface IAppProps extends IPureControlProps {}

export interface IAppState extends IPureControlState {}

export class App extends PureControlBase<IAppProps, IAppState> {
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
                        render={(props) => <EditorContainer {...props} />}
                    />
                    <Route
                        exact={true}
                        path="/home"
                        render={(props) => <EditorContainer {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
