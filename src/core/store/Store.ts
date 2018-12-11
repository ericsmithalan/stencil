import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";

import {
    IThemeState,
    ThemeReducers,
    ThemeActions
} from "@stencil.features/theme";

import {
    IShellState,
    ShellReducers,
    ShellActions
} from "@stencil.features/electron";

export type States = {
    theme: IThemeState;
    shell: IShellState;
};

export const Actions = {
    theme: ThemeActions,
    shell: ShellActions
};

export const state = combineReducers<States>({
    theme: ThemeReducers.reducer,
    shell: ShellReducers.reducer
});

export const store: Store<States> = createStore(
    state,
    compose(applyMiddleware(reduxThunk))
);
