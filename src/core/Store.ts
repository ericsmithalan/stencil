import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";

import {
    ThemeState,
    ThemeReducers,
    ThemeActions,
    ThemeActionTypes
} from "@stencil.features/theme";

export type States = {
    themeState: ThemeState;
};

export const state = combineReducers<States>({
    themeState: ThemeReducers.reducer
});

export const Actions = {
    theme: ThemeActions
};

export const ActionTypes = {
    theme: ThemeActionTypes
};

export const store: Store<States> = createStore(
    state,
    compose(applyMiddleware(reduxThunk))
);
