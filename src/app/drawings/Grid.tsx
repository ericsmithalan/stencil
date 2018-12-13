import { DrawBase } from "@core/components";

export class Grid extends DrawBase {
    protected init() {}
    protected draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ) {
        context.fillStyle = "red";
        context.fillRect(0, 0, 200, 200);
    }
}
