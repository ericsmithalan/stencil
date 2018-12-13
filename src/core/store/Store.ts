import { Store, applyMiddleware, createStore, combineReducers } from "redux";

import { History } from "history";
import { AppStore, ThemeStore, ShellStore } from "@core/store";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export interface IRootStore {
    themeStore: ThemeStore.IState;
    shellStore: ShellStore.IState;
}

export function configureStore(history: History): Store<AppStore.IState> {
    const composeEnhancers = composeWithDevTools({});

    const rootReducer = combineReducers<IRootStore>({
        themeStore: ThemeStore.reducer,
        shellStore: ShellStore.reducer
    });

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
    );

    return store;
}
