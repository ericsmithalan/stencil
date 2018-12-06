import * as React from "react";

import { IInteractiveColorScale, ISize } from "@interfaces";

import { Icon } from "@components";
import { Settings } from "@settings";

type IconButtonSizeTypes = "small" | "normal" | "large";

type IconButtonPropTypes = {
	size: IconButtonSizeTypes;
	source: JSX.Element;
	isSelectable: boolean;
	onClick(event: React.MouseEvent): void;
	buttonTheme: IInteractiveColorScale;
	iconTheme: IInteractiveColorScale;
};

type IconButtonStateTypes = {
	color: string;
	isSelected: boolean;
};

export class IconButton extends React.PureComponent<IconButtonPropTypes, IconButtonStateTypes> {
	private readonly _size: ISize;
	private readonly _iconRef: React.RefObject<Icon>;

	public static defaultProps: Partial<IconButtonPropTypes> = {
		size: "normal",
		isSelectable: false,
		onClick: (event: React.MouseEvent): void => {},
		buttonTheme: Settings.themeManager.current.uiStyles.titlebarButtonTheme,
		iconTheme: Settings.themeManager.current.uiStyles.titlebarButtonIconTheme
	};

	public constructor(props: IconButtonPropTypes) {
		super(props);

		this._iconRef = React.createRef();
		this._size = this._getSize(props.size);

		this.state = {
			color: Settings.themeManager.current.colors.icon.default,
			isSelected: false
		};
	}

	private get _icon(): Icon {
		return this._iconRef.current as Icon;
	}

	public render() {
		return (
			<a href="#" onClick={this.click} onMouseEnter={this.enter} onMouseLeave={this.leave}>
				<Icon ref={this._iconRef} source={this.props.source} />>
			</a>
		);
	}

	protected click = (e: React.MouseEvent) => {
		this.props.onClick(e);

		if (this.props.isSelectable) {
			this.setState({ isSelected: !this.state.isSelected });
		}
	};

	protected enter = (event: React.MouseEvent) => {};

	protected leave = (event: React.MouseEvent) => {};

	protected press = (event: React.MouseEvent) => {};

	private _getSize(size: IconButtonSizeTypes): ISize {
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
