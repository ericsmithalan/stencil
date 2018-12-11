import { ITheme } from "@stencil.features/theme";

export namespace ThemeActions {
    export type ChangeTheme = {
        type: "THEME_CHANGE";
        value: ITheme;
    };

    export const changeTheme = (value: ITheme): ChangeTheme => ({
        type: "THEME_CHANGE",
        value
    });
}
