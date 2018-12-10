import * as React from "react";

import { IAppTheme } from "@core.themes";

export interface IControlProps {
    theme: IAppTheme;
}
export interface IControlState {
    theme: IAppTheme;
}

export abstract class ControlBase<
    TProps extends IControlProps,
    TState extends IControlState
> extends React.PureComponent<TProps, TState> {
    private _isLoaded: boolean;

    protected constructor(props: TProps) {
        super(props);

        this._isLoaded = false;
        this.state = {
            theme: this.props.theme
        } as TState;
    }

    public static getDerivedStateFromProps(
        props: IControlProps,
        state: IControlState
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
