import * as React from "react";

import { ITheme, DarkTheme } from "@core.themes";

export interface IPureComponentProps {
    theme: ITheme;
}
export interface IPureComponentState {
    theme: ITheme;
}

export abstract class PureComponentBase<
    TProps extends IPureComponentProps,
    TState extends IPureComponentState
> extends React.PureComponent<TProps, TState> {
    private _isLoaded: boolean;

    protected constructor(props: TProps) {
        super(props);

        this._isLoaded = false;
        this.state = {
            theme: this.props.theme || DarkTheme.getTheme()
        } as TState;
    }

    public static getDerivedStateFromProps(
        props: IPureComponentProps,
        state: IPureComponentState
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

    /** @virtual */
    protected loaded(): void {}

    /** @virtual */
    protected unLoaded(): void {}

    /** @final */
    public componentDidMount() {
        this.loaded();
    }

    /** @final */
    public componentWillUnmount() {
        this.unLoaded();
    }

    protected get isLoaded(): boolean {
        return this._isLoaded;
    }

    protected set isLoaded(value: boolean) {
        this._isLoaded = value;
    }
}
