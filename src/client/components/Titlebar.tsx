import * as React from "react";

interface ITitlebarProps {
	title: string;
}

export class Titlebar extends React.Component<ITitlebarProps, {}> {
	public constructor(props: ITitlebarProps) {
		super(props);
	}

	public render() {
		return (
			<div className="titlebar">
				<div className="title">{this.props.title}</div>
			</div>
		);
	}
}
