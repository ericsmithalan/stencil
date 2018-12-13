import * as React from "react";

import {
    IPureControlProps,
    IPureControlState,
    PureControlBase
} from "@core/components";

import { ISize } from "@core/models";

export interface IUIControlProps extends IPureControlProps {
    width: number;
    height: number;
    preserveAspect: boolean;
    allowAutoScale: boolean;
}

export interface IUIControlState extends IPureControlState {
    width: number;
    height: number;
}

export abstract class UIControlBase<
    TElement extends HTMLElement,
    TProps extends IUIControlProps,
    TState extends IUIControlState
> extends PureControlBase<TProps, TState> {
    public static defaultProps: Partial<IUIControlProps> = {
        width: -1,
        height: -1,
        preserveAspect: false,
        allowAutoScale: true
    };

    private readonly _isAutoSizeY: boolean = false;
    private readonly _isAutoSizeX: boolean = false;
    protected _containerRef: React.RefObject<TElement>;

    protected constructor(props: TProps) {
        super(props);

        this._containerRef = React.createRef();

        if (this.props.allowAutoScale) {
            if (this.props.height <= 0) {
                this._isAutoSizeY = true;
            }

            if (this.props.width <= 0) {
                this._isAutoSizeX = true;
            }
        }

        this.state = {
            width: this.props.width,
            height: this.props.height
        } as TState;
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
    protected loaded(): void {
        super.loaded();

        if (this.containerEl) {
            this.measure();
            this._addEventListeners();

            this.isLoaded = true;
        } else {
            console.error("container element not found", this.containerEl);
        }
    }

    /** @virtual */
    protected unLoaded(): void {
        super.unLoaded();
        this._removeEventListeners();
        this.isLoaded = false;
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
        const size: ISize = this.calculateSize();

        if (size.width <= 0 || size.height <= 0) {
            console.warn(
                `size is 0; height: ${size.height} width: ${size.width}`
            );
        }

        console.log("SIZE:", size);

        this.width = size.width;
        this.height = size.height;
    }

    protected calculateSize(): ISize {
        let width: number = this.props.width;
        let height: number = this.props.height;

        if (this.containerEl && this.containerEl instanceof HTMLElement) {
            if (this._isAutoSizeX || this._isAutoSizeY) {
                const parent = this.containerEl.parentElement;

                if (parent) {
                    if (this._isAutoSizeX) {
                        width = parent.offsetWidth;
                        console.log(width);
                    }

                    if (this._isAutoSizeY) {
                        height = parent.offsetHeight;
                        console.log(height);
                    }
                } else {
                    console.error("no parent element found");
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
        } else {
            console.error("element is null or not instance of HTMLElement", {
                element: this.containerEl
            });
        }

        return { width: width, height: height };
    }

    private _addEventListeners(): void {
        if (this.containerEl && this.containerEl instanceof HTMLElement) {
            this.containerEl.addEventListener("click", (e) => this.click(e));
            this.containerEl.addEventListener("mouseenter", (e) =>
                this.mouseEnter(e)
            );
            this.containerEl.addEventListener("mouseleave", (e) =>
                this.mouseLeave(e)
            );
            this.containerEl.addEventListener("mousedown", (e) =>
                this.mouseDown(e)
            );
            this.containerEl.addEventListener("mouseup", (e) =>
                this.mouseUp(e)
            );
        } else {
            console.error("element is null or not instance of HTMLElement", {
                element: this.containerEl
            });
        }
    }

    private _removeEventListeners(): void {
        if (this.containerEl && this.containerEl instanceof HTMLElement) {
            this.containerEl.removeEventListener("click", (e) => this.click(e));
            this.containerEl.removeEventListener("mouseenter", (e) =>
                this.mouseEnter(e)
            );
            this.containerEl.removeEventListener("mouseleave", (e) =>
                this.mouseLeave(e)
            );
            this.containerEl.removeEventListener("mousedown", (e) =>
                this.mouseDown(e)
            );
            this.containerEl.removeEventListener("mouseup", (e) =>
                this.mouseUp(e)
            );
        } else {
            console.error("element is null or not instance of HTMLElement", {
                element: this.containerEl
            });
        }
    }
}