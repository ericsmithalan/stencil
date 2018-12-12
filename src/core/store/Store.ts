import {
    combineReducers,
    Dispatch,
    Action,
    AnyAction,
    Store,
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { themeReduce, IThemeState } from "@features/theme";
import { shellReduce, IShellState } from "@features/electron";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";

export interface IRootState {
    theme: IThemeState;
    shell: IShellState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IRootState>({
    theme: themeReduce,
    shell: shellReduce
});

export function configureStore(history: History): Store<IRootState> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});
    // create the redux-saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.

    const store = createStore(
        rootReducer,

        composeEnhancers(
            applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
    );

    return store;
}
