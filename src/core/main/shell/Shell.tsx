import * as React from "react";

import { ComponentBase, IComponentProps, IComponentState } from "@core";

import { Titlebar } from "@core.main";

export interface IShellProps extends IComponentProps {
	titlebarHeight: number;
	title: string;
}

export interface IShellState extends IComponentState {
	title: string;
	isTitlebarVisible: boolean;
}

export class Shell extends ComponentBase<IShellProps, IShellState> {
	public static defaultProps: Partial<IShellProps> = {
		titlebarHeight: 30
	};

	private _titlebar: React.RefObject<Titlebar>;

	public constructor(props: IShellProps) {
		super(props);

		this._titlebar = React.createRef();

		this.state = {
			title: props.title,
			isTitlebarVisible: false
		} as IShellState;
	}

	public set isTitlebarVisible(value: boolean) {
		this.setState({ isTitlebarVisible: value });
	}

	public get titlebar(): Titlebar {
		return this._titlebar.current as Titlebar;
	}

	public render() {
		return (
			<div
				style={{ backgroundColor: this.theme.uiStyles.windowColor }}
				className="shell"
			>
				<div
					style={{
						height: this.props.titlebarHeight,
						display: this.state.isTitlebarVisible ? "block" : "none"
					}}
					className="shell-titlebar"
				>
					<Titlebar
						theme={this.theme}
						height={this.props.titlebarHeight}
						ref={this._titlebar}
					/>
				</div>
				<div className="shell-content">{this.props.children}</div>
			</div>
		);
	}
}
