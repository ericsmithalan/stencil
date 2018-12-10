import * as React from "react";

import { DarkTheme, IAppTheme } from "@core.themes";

export interface IComponentProps {
    theme: IAppTheme;
}
export interface IComponentState {
    theme: IAppTheme;
}

export abstract class ComponentBase<
    TProps extends IComponentProps,
    TState extends IComponentState
> extends React.Component<TProps, TState> {
    private _isLoaded: boolean;

    protected constructor(props: TProps) {
        super(props);

        this._isLoaded = false;
        this.state = {
            theme: this.props.theme || DarkTheme.getTheme()
        } as TState;
    }

    public static getDerivedStateFromProps(
        props: IComponentProps,
        state: IComponentState
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
