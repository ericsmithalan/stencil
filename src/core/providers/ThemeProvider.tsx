import * as React from "react";
import { ITheme } from "@core.models";

export interface IThemeProviderProps {
    theme: ITheme;
}

export interface IThemeProviderState {}

export class ThemeProvider extends React.Component<
    IThemeProviderProps,
    IThemeProviderState
> {
    getChildContext() {
        return {
            theme: this.props.theme
        };
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}
