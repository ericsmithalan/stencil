import { ApplicationTypes } from "@stencil.redux/types";
import * as States from "@stencil.redux/states";
import { ApplicationActions } from "@stencil.redux/actions";
import { DarkTheme } from "@stencil.features/theme";

export namespace ApplicationReducers {
    const defaultState: States.ApplicationState = {
        theme: DarkTheme.getTheme()
    };

    export const reducer = (
        state: States.ApplicationState = defaultState,
        action: ApplicationActions.ChangeTheme
    ) => {
        switch (action.type) {
            case ApplicationTypes.THEME_CHANGE:
                return { ...state, theme: action.value };
        }

        return state;
    };
}
