import { ITheme } from "@core.models";

export namespace ApplicationActions {
    export type ChangeTheme = {
        type: "THEME_CHANGE";
        value: ITheme;
    };

    export const changeTheme = (value: ITheme): ChangeTheme => ({
        type: "THEME_CHANGE",
        value
    });
}
