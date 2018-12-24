import * as React from "react";

import { PixiCore } from "./pixi/PixiCore";

export interface IAppProps {}

export interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
	private readonly _pixiCore: PixiCore;
	private readonly _pixiRef: React.RefObject<HTMLDivElement>;

	public constructor(props: IAppProps) {
		super(props);
		this._pixiCore = new PixiCore();
		this._pixiRef = React.createRef();
	}

	componentDidMount() {
		if (this._pixiRef.current) {
			this._pixiCore.create(this._pixiRef.current, 500, 500);
			console.log("cool");
		}
	}

	public render() {
		return <div ref={this._pixiRef}>Hello</div>;
	}
}

export default App;
