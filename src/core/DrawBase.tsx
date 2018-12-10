import * as React from "react";
import {
    PureComponentBase,
    IPureComponentProps,
    IPureComponentState
} from "@core";

import { DarkTheme } from "@core.themes";

export interface IDrawProps extends IPureComponentProps {}

export interface IDrawState extends IPureComponentState {}

export abstract class DrawBase extends PureComponentBase<
    IDrawProps,
    IDrawState
> {
    private readonly _canvasRef: React.RefObject<HTMLCanvasElement>;

    public constructor(props: IPureComponentProps) {
        super(props);

        this._canvasRef = React.createRef();
        this.init();

        this.state = {
            theme: DarkTheme.getTheme()
        } as IDrawState;
    }

    protected abstract init(): void;

    /** @virtual */
    protected abstract draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ): void;

    protected loaded() {
        super.loaded();

        const canvas: HTMLCanvasElement = this._canvasRef
            .current as HTMLCanvasElement;

        const context: CanvasRenderingContext2D = canvas.getContext(
            "2d"
        ) as CanvasRenderingContext2D;

        this.draw(canvas, context);
    }

    public render() {
        return <canvas ref={this._canvasRef} />;
    }
}