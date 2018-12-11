import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { RootState } from "@core.states";

export const store: Store<RootState.States> = createStore(
    RootState.state,
    compose(applyMiddleware(reduxThunk))
);
