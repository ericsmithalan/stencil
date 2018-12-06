import { IFontSizes, IFontFamilies, IAppFonts } from "src/models";

export class Fonts implements IAppFonts {
    private _families: IFontFamilies;
    private _sizes: IFontSizes;

    public constructor(props?: IAppFonts) {
        if (props) {
            this.families = props.families;
            this.sizes = props.sizes;
        }
    }

    public get families(): IFontFamilies {
        return this._families;
    }

    public set families(value: IFontFamilies) {
        this._families = value;
    }

    public get sizes(): IFontSizes {
        return this._sizes;
    }

    public set sizes(value: IFontSizes) {
        this._sizes = value;
    }
}
