import "../index.css";

import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ControlBase, IControlProps, IControlState, ThemeManager } from "@core";
import { DarkTheme, IAppTheme, ThemeType } from "@core.themes";
import { EditorPage, LaunchPage } from "@app.pages";

import { ILogger } from "@core.debug";
import { Settings } from "@app";
import { Shell } from "@core.main";

export interface IAppProps extends IControlProps {}

export interface IAppState extends IControlState {
    isLoaded: boolean;
}

export class App extends ControlBase<IAppProps, IAppState> {
    public static defaultProps: Partial<IAppProps> = {};
    private _shellRef: React.RefObject<Shell>;
    private _themeManager: ThemeManager;

    public constructor(props: IAppProps) {
        super(props);

        this._shellRef = React.createRef();

        this._themeManager = Settings.themeManager;
        this._themeManager.current.subscribe((value) => {
            this._handleThemeChanged(value);
        });

        this._themeManager.setTheme(ThemeType.Dark);

        this.state = {
            isLoaded: false,
            theme: DarkTheme.getTheme()
        } as IAppState;
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

    private _handleThemeChanged(theme: IAppTheme): void {
        this.setState({ theme: theme });
    }

    public render() {
        return (
            <Shell ref={this._shellRef} theme={this.state.theme}>
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
        return <LaunchPage theme={this.state.theme} />;
    }

    private _renderApp(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={(props) => (
                            <EditorPage {...props} theme={this.state.theme} />
                        )}
                    />
                    <Route
                        exact={true}
                        path="/home"
                        render={(props) => (
                            <EditorPage {...props} theme={this.state.theme} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
