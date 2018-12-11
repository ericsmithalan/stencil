import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { ApplicationState } from "@stencil.redux/states";
import { combineReducers } from "redux";
import * as Reducers from "@stencil.redux/reducers";

export type States = {
    application: ApplicationState;
};

export const state = combineReducers<States>({
    application: Reducers.ApplicationReducers.reducer
});

export const store: Store<States> = createStore(
    state,
    compose(applyMiddleware(reduxThunk))
);
