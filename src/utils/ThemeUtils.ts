import { IMonoColorScale } from "@models";

export class ThemeUtils {
    public static createMonoColorScale(
        high: string,
        highMedium: string,
        medium: string,
        lowMedium: string,
        low: string
    ): IMonoColorScale {
        return {
            high: high,
            highMedium: highMedium,
            medium: medium,
            lowMedium: lowMedium,
            low: low
        };
    }
}
