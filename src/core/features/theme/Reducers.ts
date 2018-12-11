import { ThemeActions, IThemeState, ITheme } from "@stencil.features/theme";
import { IAction } from "@stencil.store";

import { LightTheme } from "@stencil.features/theme";

export namespace ThemeReducers {
    const defaultState: IThemeState = LightTheme.getTheme();

    export const reducer = (
        state: IThemeState = defaultState,
        action: IAction<ITheme>
    ) => {
        switch (action.type) {
            case ThemeActions.THEME_CHANGE:
                return { ...state, theme: action.value };
        }

        return state;
    };
}
