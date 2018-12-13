import * as React from "react";

import {
	IUIControlProps,
	IUIControlState,
	Icon,
	UIControlBase
} from "@core/components";

export interface IIconButtonProps extends IUIControlProps {
	onClick(e: MouseEvent): void;
}

export interface IIconButtonState extends IUIControlState {}

export class IconButton extends UIControlBase<
	HTMLAnchorElement,
	IIconButtonProps,
	IIconButtonState
> {
	public constructor(props: IIconButtonProps) {
		super(props);
	}

	protected click(e: MouseEvent) {
		super.click(e);

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	public render(): JSX.Element {
		return (
			<a
				style={{
					width: this.state.width,
					height: this.state.height
				}}
				ref={this._containerRef}
				href="#"
			>
				<Icon />
			</a>
		);
	}
}
