import * as React from "react";

import { ISize } from "@core.interfaces";
import { Control, IControlProps, IControlState } from "@core.components";

export interface IUIControlProps extends IControlProps {
    width: number;
    height: number;
    preserveAspect: boolean;
}

export interface IUIControlState extends IControlState {
    width: number;
    height: number;
}

export abstract class UIControl<TProps extends IUIControlProps, TState extends IUIControlState> extends Control<TProps, TState> {
    public static defaultProps: Partial<IUIControlProps> = {
        width: 0,
        height: 0,
        preserveAspect: false
    };

    private readonly _isAutoSizeY: boolean = false;
    private readonly _isAutoSizeX: boolean = false;
    protected _containerRef: React.RefObject<HTMLDivElement>;

    protected constructor(props: TProps) {
        super(props);

        this._containerRef = React.createRef();

        if (this.props.height === 0) {
            this._isAutoSizeY = true;
        }

        if (this.props.width === 0) {
            this._isAutoSizeX = true;
        }
    }

    public get width(): number {
        return this.state.width;
    }

    public set width(value: number) {
        if (this.state.width !== value) {
            this.setState({ width: value });
        }
    }

    public get height(): number {
        return this.state.width;
    }

    public set height(value: number) {
        if (this.state.height !== value) {
            this.setState({ height: value });
        }
    }

    protected get containerEl(): HTMLDivElement {
        return this._containerRef.current as HTMLDivElement;
    }

    /** @virtual */
    protected getInitialState(): TState {
        return {
            width: this.props.width,
            height: this.props.height
        } as TState;
    }

    public abstract loaded(): void;

    /** @virtual */
    public willLoad(): void {}

    /** @virtual */
    public unLoaded(): void {}

    public componentWillMount(): void {
        super.componentWillMount();
        this.willLoad();
    }

    public componentDidMount(): void {
        super.componentDidMount();

        if (this.containerEl) {
            this.measure();
            this._addEventListeners(this.containerEl);
        } else {
            this.logger.error("container element not found", this.containerEl);
        }

        this.loaded();
    }

    /** @virtual */
    public componentWillUnmount(): void {
        super.componentWillUnmount();

        this._removeEventListeners(this.containerEl);

        this.unLoaded();
    }

    /** @virtual */
    protected mouseDown = (evt: MouseEvent): void => {};

    /** @virtual */
    protected mouseEnter = (evt: MouseEvent): void => {};

    /** @virtual */
    protected mouseLeave = (evt: MouseEvent): void => {};

    /** @virtual */
    protected mouseUp = (evt: MouseEvent): void => {};

    /** @virtual */
    protected click = (evt: MouseEvent): void => {};

    protected measure() {
        const size: ISize = this.calculateSize(this.containerEl);

        this.width = size.width;
        this.height = size.height;
    }

    protected calculateSize(element: HTMLDivElement): ISize {
        let width: number = this.props.width;
        let height: number = this.props.height;

        if (this._isAutoSizeX || this._isAutoSizeY) {
            const parent = element.parentElement;

            if (parent) {
                if (this._isAutoSizeX) {
                    width = parent.offsetWidth;
                }

                if (this._isAutoSizeY) {
                    height = parent.offsetHeight;
                }
            } else {
                this.logger.error("no parent element found");
            }
        }

        if (this.props.preserveAspect) {
            let value = Math.min(width, height);

            if (value <= 0) {
                value = Math.max(width, height);
            }

            width = value;
            height = value;
        }

        if (width <= 0 || height <= 0) {
            this.logger.warn(`size is 0; height: ${height} width: ${width}`);
        }

        return { width: width, height: height };
    }

    private _addEventListeners(element: HTMLDivElement): void {
        element.addEventListener("click", this.click);
        element.addEventListener("mouseenter", this.mouseEnter);
        element.addEventListener("mouseleave", this.mouseLeave);
        element.addEventListener("mousedown", this.mouseDown);
        element.addEventListener("mouseup", this.mouseUp);
    }

    private _removeEventListeners(element: HTMLDivElement): void {
        element.removeEventListener("click", this.click);
        element.removeEventListener("mouseenter", this.mouseEnter);
        element.removeEventListener("mouseleave", this.mouseLeave);
        element.removeEventListener("mousedown", this.mouseDown);
        element.removeEventListener("mouseup", this.mouseUp);
    }
}
