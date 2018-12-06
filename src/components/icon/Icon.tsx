import * as React from "react";

import { ISize } from "@interfaces";
import { Settings } from "@settings";

type IconSizeTypes = "small" | "normal" | "large";

type IconPropTypes = {
	size: IconSizeTypes;
	source: JSX.Element;
};

type IconStateTypes = {
	color: string;
};

export class Icon extends React.PureComponent<IconPropTypes, IconStateTypes> {
	private _source: JSX.Element;
	private readonly _size: ISize;

	public static defaultProps: Partial<IconPropTypes> = {
		size: "normal"
	};

	public constructor(props: IconPropTypes) {
		super(props);

		this._size = this._getSize(props.size);

		this.state = {
			color: Settings.themeManager.current.colors.icon.default
		};
	}

	public get source(): JSX.Element {
		return this._source;
	}

	public get color(): string {
		return this.state.color;
	}

	public set color(value: string) {
		if (this.state.color !== value) {
			this.setState({ color: value });
		}
	}

	public set source(value: JSX.Element) {
		this._source = value;
	}

	public componentWillMount() {
		if (this.props.source) {
			this.source = this.props.source;
		}
	}

	public render() {
		return (
			<svg
				className="iconContainer"
				width={this._size.width}
				height={this._size.height}
				fill={this.state.color}
				preserveAspectRatio="xMaxYMax meet"
				viewBox={`0, 0, ${this._size.width}, ${this._size.height}`}
			>
				{this._source}
			</svg>
		);
	}

	private _getSize(size: IconSizeTypes): ISize {
		switch (size) {
			case "small":
				return {
					width: 18,
					height: 18
				};
			case "normal":
				return {
					width: 24,
					height: 24
				};
			case "large":
				return {
					width: 32,
					height: 32
				};
			default:
				throw new Error(`size type is out of range ${size}`);
		}
	}
}
