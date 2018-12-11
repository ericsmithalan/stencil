import { ApplicationState } from "@core.states";
import { combineReducers } from "redux";
import * as Reducers from "@core.reducers";

export namespace RootState {
    export type States = {
        application: ApplicationState;
    };

    export const state = combineReducers<States>({
        application: Reducers.ApplicationReducers.reducer
    });
}
