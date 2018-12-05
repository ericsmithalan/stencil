import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./ui/index";
import { Config } from "./Config";

ReactDOM.render(<App />, document.getElementById(Config.ROOT_ID) as HTMLElement);
