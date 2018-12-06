import * as React from "react";

export interface UIControlProps {
	width: number;
	height: number;
	color: string;
	source: JSX.Element;
}

export interface UIControlState {
	color: string;
}

export class UIControl extends React.Component<UIControlProps, UIControlState> {
	private _source: JSX.Element;
	public static defaultProps: Partial<UIControlProps> = {
		width: 32,
		height: 32,
		color: "red"
	};

	public render() {
		return <div>base UI control</div>;
	}
}
