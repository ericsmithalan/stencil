import * as React from "react";

import { DarkTheme, IAppTheme } from "@core.themes";

import { ILogger } from "@core.debug";
import { Settings } from "src/app/Settings";

export interface IPageProps {
	theme: IAppTheme;
	logger: ILogger;
}

export interface IPageState {
	theme: IAppTheme;
}

export abstract class PageBase<
	TProps extends IPageProps,
	TState extends IPageState
> extends React.Component<TProps, TState> {
	private readonly _theme: IAppTheme;
	private readonly _logger: ILogger;

	public constructor(props: TProps) {
		super(props);

		this._logger = props.logger;

		this.state = {
			theme: this.props.theme
		} as TState;
	}

	/** @virtual */
	protected loaded(): void {}

	/** @virtual */
	protected unLoaded(): void {}

	/** @final */
	public componentDidMount() {
		this.loaded();
	}

	public static getDerivedStateFromProps(
		props: IPageProps,
		state: IPageState
	) {
		if (props.theme && state.theme) {
			if (props.theme.id !== state.theme.id) {
				return {
					theme: props.theme
				};
			}
		}

		return null;
	}

	/** @final */
	public componentWillUnmount() {
		this.unLoaded();
	}
}
