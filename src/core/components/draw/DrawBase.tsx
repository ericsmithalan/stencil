import * as React from "react";

import {
    IUIControlProps,
    IUIControlState,
    UIControlBase
} from "@core/components";
import {} from "../control/UIControlBase";

export interface IDrawProps extends IUIControlProps {}

export interface IDrawState extends IUIControlState {}

export abstract class DrawBase extends UIControlBase<
    HTMLCanvasElement,
    IDrawProps,
    IDrawState
> {
    /** @virtual */
    protected abstract draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ): void;

    protected loaded() {
        const canvas: HTMLCanvasElement = this._containerRef
            .current as HTMLCanvasElement;

        const context: CanvasRenderingContext2D = canvas.getContext(
            "2d"
        ) as CanvasRenderingContext2D;

        this.draw(canvas, context);
    }

    public render() {
        return (
            <canvas
                className="draw-canvas"
                width={this.state.width}
                height={this.state.height}
                style={{ width: this.state.width, height: this.state.height }}
                ref={this._containerRef}
            />
        );
    }
}
