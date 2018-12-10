import * as React from "react";

import { DarkTheme, IAppTheme } from "@core.themes";

import { ILogger } from "@core.debug";
import { ComponentBase } from "@core";

export interface IPageProps {
    theme: IAppTheme;
}

export interface IPageState {
    theme: IAppTheme;
}

export abstract class PageBase<
    TProps extends IPageProps,
    TState extends IPageState
> extends ComponentBase<TProps, TState> {
    public constructor(props: TProps) {
        super(props);

        this.state = {
            theme: this.props.theme
        } as TState;
    }

    public static getDerivedStateFromProps(
        props: IPageProps,
        state: IPageState
    ) {
        if (props.theme && state.theme) {
            if (props.theme.id !== state.theme.id) {
                return {
                    theme: props.theme
                };
            }
        }

        return null;
    }
}
