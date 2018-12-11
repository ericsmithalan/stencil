import { ApplicationTypes } from "@core.actionTypes";
import * as States from "@core.states";
import { ApplicationActions } from "@core.actions";
import { DarkTheme } from "@core.themes";

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
