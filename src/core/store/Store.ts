import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";

import { ThemeRedux, IThemeState } from "@stencil.features/theme";
import { ShellRedux, IShellState } from "@stencil.features/electron";

export interface IRootState {
    theme: IThemeState;
    shell: IShellState;
}

export const state = combineReducers<IRootState>({
    theme: ThemeRedux.reduce,
    shell: ShellRedux.reduce
});

export const store: Store<IRootState> = createStore(
    state,
    compose(applyMiddleware(reduxThunk))
);
