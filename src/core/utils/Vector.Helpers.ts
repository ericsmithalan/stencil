import { IBounds, IVector2 } from "@core/models";

export class VectorHelpers {
    public static isVector2Equal(a: IVector2, b: IVector2) {
        if (a.x === b.x && a.y === b.y) {
            return true;
        }

        return false;
    }

    public static isBoundsEqual(a: IBounds, b: IBounds) {
        if (
            a.x === b.x &&
            a.y === b.y &&
            a.width === b.width &&
            a.height === b.height
        ) {
            return true;
        }

        return false;
    }
}
