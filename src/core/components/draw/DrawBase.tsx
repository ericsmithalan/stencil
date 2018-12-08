import * as React from "react";

import { Control, IControlProps, IControlState } from "@core.components";

export interface IDrawProps extends IControlProps {}

export interface IDrawState extends IControlState {}

export abstract class DrawBase extends Control<IDrawProps, IDrawState> {
    private readonly _canvasRef: React.RefObject<HTMLCanvasElement>;

    public constructor(props: IDrawProps) {
        super(props);
        this._canvasRef = React.createRef();
    }

    public get canvas(): HTMLCanvasElement {
        return this._canvasRef.current as HTMLCanvasElement;
    }

    public abstract draw(context: CanvasRenderingContext2D): void;

    public componentDidMount() {
        super.componentDidMount();

        const context = this.canvas.getContext("2d") as CanvasRenderingContext2D;

        this.draw(context);
    }

    public render() {
        return <canvas ref={this._canvasRef} />;
    }
}
