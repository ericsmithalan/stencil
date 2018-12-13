export class UnitHelpers {
    private static _dpi: number;

    public static get DPI(): number {
        if (!this._dpi) {
            this._dpi = this._getDPI();
        }

        return this._dpi;
    }

    private static _getDPI(): number {
        let width: number = 0;
        const root = document.getElementById("root") as HTMLElement;

        const testDiv = document.createElement("div");

        testDiv.setAttribute(
            "style",
            "height: 1in; position: absolute; width: 1in; background-color:red; display:inline-block; z-index:100; visibility: hidden"
        );

        root.appendChild(testDiv);
        width = testDiv.offsetWidth;
        root.removeChild(testDiv);

        return width;
    }

    public static pixelsToInches(value: number): number {
        console.log("DPI:", this.DPI, value);
        return value / this.DPI;
    }
    public static inchesToPixels(value: number): number {
        return value * this.DPI;
    }
}
