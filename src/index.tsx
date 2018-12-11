import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@stencil.app/App";

import { Provider } from "react-redux";
import { store } from "@stencil.redux/Store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
