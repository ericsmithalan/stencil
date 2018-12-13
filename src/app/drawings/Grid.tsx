import { DrawBase } from "@core/components";
import { UnitHelpers } from "@core/utils";

export class Grid extends DrawBase {
    __name = "grid";
    protected init() {}
    protected draw(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D
    ) {
        context.fillStyle = "red";
        context.fillRect(0, 0, this.state.width, this.state.height);

        const sizeX: number = UnitHelpers.pixelsToInches(canvas.width);
        const sizeY: number = UnitHelpers.pixelsToInches(canvas.height);

        const barsX: number = sizeX / 1;
        const barsY: number = sizeY / 1;
        const gapX: number = this.width / barsX;
        const gapY: number = this.height / barsY;

        this._drawVerticalLines(context, barsY, canvas.width, gapY);
        this._drawHorizontalLines(context, barsX, canvas.height, gapX);

        console.log("grid", sizeX, sizeY, canvas.width, canvas.height);

        console.log("should have drawn");
    }

    private _drawVerticalLines(
        context: CanvasRenderingContext2D,
        numberOfBars: number,
        width: number,
        gap: number
    ) {
        context.save();

        context.strokeStyle = "green";
        context.lineWidth = 3;

        for (let i = 0; i < numberOfBars; i++) {
            context.beginPath();
            context.moveTo(0, i * gap);
            context.lineTo(width, i * gap);
            context.stroke();
        }

        context.restore();
    }

    private _drawHorizontalLines(
        context: CanvasRenderingContext2D,
        numberOfBars: number,
        height: number,
        gap: number
    ) {
        context.save();

        context.strokeStyle = "blue";
        context.lineWidth = 3;

        for (let i = 0; i < numberOfBars; i++) {
            context.beginPath();
            context.moveTo(i * gap, 0);
            context.lineTo(i * gap, height);
            context.stroke();
        }

        context.restore();
    }
}
