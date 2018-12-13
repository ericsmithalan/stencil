import * as React from "react";

export interface IControlProps {}
export interface IControlState {}

export abstract class ControlBase<
    TProps extends IControlProps,
    TState extends IControlState
> extends React.Component<TProps, TState> {
    private _isLoaded: boolean;
    protected __name: string = "ControlBase";

    protected constructor(props: TProps) {
        super(props);

        this._isLoaded = false;
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
