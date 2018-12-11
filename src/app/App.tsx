"use strict";

import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    PureComponentBase,
    IPureComponentProps,
    IPureComponentState
} from "@stencil.components/index";

import { EditorPage, LaunchPage } from "@stencil.app/pages";
import { Shell } from "@stencil.features/electron";

export interface IAppProps extends IPureComponentProps {}

export interface IAppState extends IPureComponentState {
    isLoaded: boolean;
}

export class App extends PureComponentBase<IAppProps, IAppState> {
    public static defaultProps: Partial<IAppProps> = {};
    private _shellRef: React.RefObject<Shell>;

    public constructor(props: IAppProps) {
        super(props);

        this._shellRef = React.createRef();

        this.state = {
            isLoaded: false
        } as IAppState;
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

    protected unLoaded() {}

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
        return <LaunchPage />;
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
