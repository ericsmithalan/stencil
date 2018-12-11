import { ITheme } from "@stencil.features/theme";
import { IAction } from "@stencil.store";

export namespace ThemeActions {
    export const THEME_CHANGE = "THEME_CHANGE";
    export type THEME_CHANGE = typeof THEME_CHANGE;

    export const changeTheme = (value: ITheme): IAction<ITheme> => ({
        type: THEME_CHANGE,
        value
    });
}
