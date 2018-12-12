import { DrawBase } from "@components/index";

export class Grid extends DrawBase {
    protected init() {}
    protected draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ) {
        context.fillStyle = "red";
        context.rect(0, 0, 200, 200);
    }
}
