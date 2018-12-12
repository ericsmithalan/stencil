import {
	Action,
	AnyAction,
	Dispatch,
	Store,
	applyMiddleware,
	combineReducers,
	createStore
} from "redux";

import { History } from "history";
import { ShellRedux } from "@core/shell";
import { ThemeRedux } from "@core/theme";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export interface IRootState {
	theme: ThemeRedux.IState;
	shell: ShellRedux.IState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IRootState>({
	theme: ThemeRedux.reducer,
	shell: ShellRedux.reducer
});

export function configureStore(history: History): Store<IRootState> {
	const composeEnhancers = composeWithDevTools({});

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
	);

	return store;
}
