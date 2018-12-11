import * as React from "react";

export interface IPureComponentProps {}
export interface IPureComponentState {}

export abstract class PureComponentBase<
    TProps extends IPureComponentProps,
    TState extends IPureComponentState
> extends React.PureComponent<TProps, TState> {
    private _isLoaded: boolean;

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
