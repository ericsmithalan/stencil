import { DarkTheme, ITheme, LightTheme, ThemeColor } from "@core/theme";

import { Reducer } from "redux";
import { action } from "typesafe-actions";

export namespace ThemeStore {
    /** STATE */
    export interface IState {
        themeColor: ThemeColor;
        theme: ITheme;
    }

    /** INITIAL STATE */
    export const initialState: ThemeStore.IState = {
        themeColor: ThemeColor.Light,
        theme: LightTheme.getTheme()
    };

    /** ACTION TYPES */
    export const enum actionTypes {
        CHANGE_THEME = "@@theme/CHANGE_THEME"
    }

    /** ACTIONS */
    export const actions = {
        changeTheme: (value: ThemeColor) =>
            action(actionTypes.CHANGE_THEME, value)
    };

    /** REDUCER */
    export const reducer: Reducer<ThemeStore.IState> = (
        state: IState = initialState,
        action
    ) => {
        switch (action.type) {
            case actionTypes.CHANGE_THEME:
                let theme: ITheme;
                if (action.payload === ThemeColor.Dark) {
                    theme = DarkTheme.getTheme();
                } else {
                    theme = LightTheme.getTheme();
                }
                return { ...state, theme: theme, themeColor: action.payload };
            default: {
                return state;
            }
        }
    };
}
