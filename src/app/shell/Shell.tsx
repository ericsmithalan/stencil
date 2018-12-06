import * as React from "react";

import { IAppTheme } from "@interfaces";
import { Settings } from "@settings";
import { Titlebar } from "@app";

type ShellPropTypes = {
	titlebarHeight: number;
	title: string;
};

type ShellStateTypes = {
	title: string;
	isTitlebarVisible: boolean;
};

export class Shell extends React.Component<ShellPropTypes, ShellStateTypes> {
	public static defaultProps: Partial<ShellPropTypes> = {
		titlebarHeight: 30
	};

	private _titlebar: React.RefObject<Titlebar>;

	public constructor(props: ShellPropTypes) {
		super(props);

		this._titlebar = React.createRef();

		this.state = {
			title: props.title,
			isTitlebarVisible: false
		};
	}

	public set isTitlebarVisible(value: boolean) {
		this.setState({ isTitlebarVisible: value });
	}

	public get titlebar(): Titlebar {
		return this._titlebar.current as Titlebar;
	}

	public componentDidMount() {}

	public render() {
		const { uiStyles } = Settings.themeManager.current;

		console.log(uiStyles);

		return (
			<div style={{ backgroundColor: uiStyles.windowColor }} className="shell">
				<div
					style={{
						height: this.props.titlebarHeight,
						display: this.state.isTitlebarVisible ? "block" : "none"
					}}
					className="shell-titlebar"
				>
					<Titlebar height={this.props.titlebarHeight} ref={this._titlebar} />
				</div>
				<div className="shell-content">{this.props.children}</div>
			</div>
		);
	}
}
