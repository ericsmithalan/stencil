import { IAppFonts, IAppTheme, IAppColors } from "@models";

export class Theme implements IAppTheme {
    private _colors: IAppColors;
    private _fonts: IAppFonts;
    private _id: string;

    public constructor(props?: IAppTheme) {
        if (props) {
            this.id = props.id;
            this.colors = props.colors;
            this.fonts = props.fonts;
        }
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get colors(): IAppColors {
        return this._colors;
    }

    public set colors(value: IAppColors) {
        this._colors = value;
    }

    public get fonts(): IAppFonts {
        return this._fonts;
    }

    public set fonts(value: IAppFonts) {
        this._fonts = value;
    }
}
