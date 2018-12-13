import {
    IAlertColorScale,
    IAppFonts,
    IFontFamilies,
    IFontSizes,
    IInteractiveColorScale,
    IMonoColorScale
} from "@core/theme";

import { ISize, SizeType } from "@core/models";

export class ThemeHelpers {
    public static getIconButtonSize(size: SizeType): ISize {
        switch (size) {
            case SizeType.Small:
                return {
                    width: 18,
                    height: 18
                };
            case SizeType.Normal:
                return {
                    width: 24,
                    height: 24
                };
            case SizeType.Large:
                return {
                    width: 32,
                    height: 32
                };
            default:
                throw new Error(`size type is out of range ${size}`);
        }
    }

    public static getIconSize(size: SizeType): ISize {
        switch (size) {
            case SizeType.Small:
                return {
                    width: 18,
                    height: 18
                };
            case SizeType.Normal:
                return {
                    width: 24,
                    height: 24
                };
            case SizeType.Large:
                return {
                    width: 32,
                    height: 32
                };
            default:
                throw new Error(`size type is out of range ${size}`);
        }
    }

    public static defaultFontStyles(): IAppFonts {
        const families: IFontFamilies = {
            body: "'Libre Franklin', sans-serif",
            headers: "'Libre Franklin', sans-serif"
        };

        const sizes: IFontSizes = {
            h1: 48,
            h2: 32,
            h3: 28,
            h4: 24,
            h5: 18,
            h6: 16,
            small: 12,
            body: 1,
            default: 13
        };

        return {
            families: families,
            sizes: sizes
        };
    }

    public static defaultAlertColors(): IAlertColorScale {
        return {
            warning: "#bcb34f",
            success: "#4fbc7b",
            danger: "#e94b35",
            error: "#bc4f4f"
        };
    }

    public static defaultIconColors(
        base: IMonoColorScale,
        accent: IMonoColorScale
    ): IInteractiveColorScale {
        return {
            default: base.medium,
            selected: accent.high,
            hover: base.highMedium,
            press: accent.highMedium
        };
    }
}
