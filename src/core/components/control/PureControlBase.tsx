import * as React from "react";

export interface IPureControlProps {}
export interface IPureControlState {}

export abstract class PureControlBase<
    TProps extends IPureControlProps,
    TState extends IPureControlState
> extends React.PureComponent<TProps, TState> {
    private _isLoaded: boolean;
    protected __name: string = "PureControlBase";

    protected constructor(props: TProps) {
        super(props);

        this._isLoaded = false;
    }

    /** @virtual */
    protected init(): void {}

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
