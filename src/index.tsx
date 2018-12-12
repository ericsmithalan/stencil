import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "@app/App";
import { Provider } from "react-redux";
import { configureStore } from "@core/store";
import { createHashHistory } from "history";

const history = createHashHistory();
const store = configureStore(history);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
