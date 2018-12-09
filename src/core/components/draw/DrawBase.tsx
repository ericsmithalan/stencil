import * as React from "react";

import { UIControl, IUIControlProps, IUIControlState } from "@core.components";

export interface IDrawProps extends IUIControlProps {}

export interface IDrawState extends IUIControlState {}

export abstract class DrawBase extends UIControl<HTMLCanvasElement, IDrawProps, IDrawState> {
    public constructor(props: IDrawProps) {
        super(props);
    }

    public abstract draw(context: CanvasRenderingContext2D): void;

    protected loaded(): void {
        super.loaded();
        const context = this.containerEl.getContext("2d") as CanvasRenderingContext2D;
        this.draw(context);
    }

    public render() {
        return <canvas ref={this._containerRef} />;
    }
}
