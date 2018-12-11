import {
    ThemeActions,
    ThemeState,
    ThemeActionTypes
} from "@stencil.features/theme";

import { DarkTheme } from "@stencil.features/theme";

export namespace ThemeReducers {
    const defaultState: ThemeState = {
        theme: DarkTheme.getTheme()
    };

    export const reducer = (
        state: ThemeState = defaultState,
        action: ThemeActions.ChangeTheme
    ) => {
        switch (action.type) {
            case ThemeActionTypes.THEME_CHANGE:
                return { ...state, theme: action.value };
        }

        return state;
    };
}
