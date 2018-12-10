import { DrawBase } from "@core";

export class Grid extends DrawBase {
    protected draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ) {
        context.fillStyle = "red";
        context.rect(0, 0, 200, 200);
    }
}
