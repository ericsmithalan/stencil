import * as React from "react";

import { ISize, ISpacing4, ISpacing2 } from "@core.interfaces";
import { Control, IControlProps, IControlState } from "@core.components";

export interface IUIControlProps extends IControlProps {
    width: number;
    height: number;
    padding: ISpacing4 | ISpacing2;
    margin: ISpacing4 | ISpacing2;
    preserveAspect: boolean;
}

export interface IUIControlState extends IControlState {
    width: number;
    height: number;
    padding: ISpacing4 | ISpacing2;
    margin: ISpacing4 | ISpacing2;
}

export abstract class UIControl<TProps extends IUIControlProps, TState extends IUIControlState, TElement extends HTMLElement> extends Control<TProps, TState> {
    public static defaultProps: Partial<IUIControlProps> = {
        width: 0,
        height: 0,
        preserveAspect: false,
        padding: { x: 0, y: 0 },
        margin: { x: 5, y: 5 }
    };

    private readonly _isAutoSizeY: boolean = false;
    private readonly _isAutoSizeX: boolean = false;
    protected _containerRef: React.RefObject<TElement>;

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

    protected get containerEl(): TElement {
        return this._containerRef.current as TElement;
    }

    /** @virtual */
    protected defaultState(): TState {
        return {
            width: this.props.width,
            height: this.props.height
        } as TState;
    }

    protected abstract loaded(): void;

    /** @virtual */
    protected willLoad(): void {}

    /** @virtual */
    protected unLoaded(): void {}

    public componentWillMount(): void {
        this.willLoad();
    }

    public componentDidMount(): void {
        if (this.containerEl) {
            this.measure();
            this._addEventListeners(this.containerEl);

            this.loaded();
        } else {
            this.logger.error("container element not found", this.containerEl);
        }
    }

    /** @virtual */
    public componentWillUnmount(): void {
        this._removeEventListeners(this.containerEl);
        this.unLoaded();
    }

    /** @virtual */
    protected mouseDown(evt: MouseEvent): void {}

    /** @virtual */
    protected mouseEnter(evt: MouseEvent): void {}

    /** @virtual */
    protected mouseLeave(evt: MouseEvent): void {}

    /** @virtual */
    protected mouseUp(evt: MouseEvent): void {}

    /** @virtual */
    protected click(evt: MouseEvent): void {}

    protected measure() {
        const size: ISize = this.calculateSize(this.containerEl);

        if (size.width <= 0 || size.height <= 0) {
            this.logger.warn(`size is 0; height: ${size.height} width: ${size.width}`);
        }

        this.width = size.width;
        this.height = size.height;
    }

    protected calculateSize(element: TElement): ISize {
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
            // try min value first
            let value = Math.min(width, height);

            if (value <= 0) {
                value = Math.max(width, height);
            }

            width = value;
            height = value;
        }

        return { width: width, height: height };
    }

    private _factorYMargin(value: number): number {
        let number = value;

        if (this.props.margin.hasOwnProperty("x")) {
            const prop = this.props.margin as ISpacing2;
            value - prop.y * 2;
        }

        if (this.props.margin.hasOwnProperty("left")) {
            const prop = this.props.margin as ISpacing4;
            value - prop.top + prop.bottom;
        }

        return number;
    }

    private _factorXMargin(value: number): number {
        let number = value;

        if (this.props.margin.hasOwnProperty("x")) {
            const prop = this.props.margin as ISpacing2;
            value - prop.x * 2;
        }

        if (this.props.margin.hasOwnProperty("left")) {
            const prop = this.props.margin as ISpacing4;
            value - prop.left + prop.right;
        }

        return number;
    }

    private _factorYPadding(value: number): number {
        let number = value;

        if (this.props.padding.hasOwnProperty("x")) {
            const prop = this.props.padding as ISpacing2;
            value - prop.y * 2;
        }

        if (this.props.padding.hasOwnProperty("left")) {
            const prop = this.props.padding as ISpacing4;
            value - prop.top + prop.bottom;
        }

        return number;
    }

    private _factorXPadding(value: number): number {
        let number = value;

        if (this.props.padding.hasOwnProperty("x")) {
            const prop = this.props.padding as ISpacing2;
            value - prop.x * 2;
        }

        if (this.props.padding.hasOwnProperty("left")) {
            const prop = this.props.padding as ISpacing4;
            value - prop.left + prop.right;
        }

        return number;
    }

    private _addEventListeners(element: TElement): void {
        element.addEventListener("click", (e) => this.click(e));
        element.addEventListener("mouseenter", (e) => this.mouseEnter(e));
        element.addEventListener("mouseleave", (e) => this.mouseLeave(e));
        element.addEventListener("mousedown", (e) => this.mouseDown(e));
        element.addEventListener("mouseup", (e) => this.mouseUp(e));
    }

    private _removeEventListeners(element: TElement): void {
        element.removeEventListener("click", (e) => this.click(e));
        element.removeEventListener("mouseenter", (e) => this.mouseEnter(e));
        element.removeEventListener("mouseleave", (e) => this.mouseLeave(e));
        element.removeEventListener("mousedown", (e) => this.mouseDown(e));
        element.removeEventListener("mouseup", (e) => this.mouseUp(e));
    }
}
