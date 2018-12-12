import { LightTheme } from "./themes/LightTheme";
import { ITheme, IThemeState } from "@features/theme";
import { IAction } from "@store";
import { Reducer } from "redux";

const initialState: IThemeState = LightTheme.getTheme();

export const THEME_CHANGE = "@@theme/THEME_CHANGE";
export type THEME_CHANGE = typeof THEME_CHANGE;

const changeTheme = (value: ITheme): IAction<ITheme> => ({
    type: THEME_CHANGE,
    value
});

export const themeReduce: Reducer<IThemeState> = (
    state: IThemeState = initialState,
    action: IAction<any>
) => {
    switch (action.type) {
        case THEME_CHANGE:
            return action.value;

        default: {
            return state;
        }
    }
};

export const themeActions = {
    changeTheme: changeTheme
};
