import { LightTheme } from "./themes/LightTheme";
import { ITheme } from "@stencil.features/theme";
import { IAction } from "@stencil.store";

export interface IThemeState extends ITheme {}

export namespace ThemeRedux {
    const defaultState: IThemeState = LightTheme.getTheme();

    export const THEME_CHANGE = "THEME_CHANGE";
    export type THEME_CHANGE = typeof THEME_CHANGE;

    const changeTheme = (value: ITheme): IAction<ITheme> => ({
        type: THEME_CHANGE,
        value
    });

    export const reduce = (
        state: IThemeState = defaultState,
        action: IAction<ITheme>
    ): IThemeState => {
        switch (action.type) {
            case THEME_CHANGE:
                return action.value;
        }

        return state;
    };

    export const actions = {
        changeTheme: changeTheme
    };
}
