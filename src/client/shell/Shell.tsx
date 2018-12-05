import * as React from "react";

import { Titlebar } from "../components/index";

interface IShellProps {}

interface IShellState {
	isLoaded: boolean;
}

export class Shell extends React.Component<IShellProps, IShellState> {
	public constructor(props: IShellProps) {
		super(props);

		this.state = {
			isLoaded: false
		};
	}

	public render() {
		return (
			<div className="shell">
				<div className="shellTitlebar">
					<Titlebar title="my cool title" />
				</div>

				<div className="shellContent">{this.props.children}</div>
			</div>
		);
	}
}
