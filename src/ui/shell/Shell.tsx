import "./shell.css";

import * as React from "react";

import { Titlebar } from "@shell";

interface IShellProps {}

interface IShellState {}

export class Shell extends React.Component<IShellProps, IShellState> {
	private _titlebar: React.RefObject<Titlebar>;

	public constructor(props: IShellProps) {
		super(props);

		this._titlebar = React.createRef();
	}

	public get titlebar(): Titlebar {
		return this._titlebar.current as Titlebar;
	}

	public componentDidMount() {
		this.titlebar.setTitle("cool title dude");
	}

	public render() {
		return (
			<div className="shell">
				<div className="shell-titlebar">
					<Titlebar height={50} ref={this._titlebar} />
				</div>
				<div className="shell-content">{this.props.children}</div>
			</div>
		);
	}
}
