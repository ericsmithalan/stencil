import * as React from "react";

import { DarkTheme, IAppTheme } from "@core.themes";

import { ILogger } from "@core.debug";
import { Settings } from "src/app/Settings";

export interface IPageProps {
	theme: IAppTheme;
	logger?: ILogger;
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

	public static defaultProps: Partial<IPageProps> = {
		theme: DarkTheme.getTheme()
	};

	public constructor(props: TProps) {
		super(props);

		if (props.logger) {
			this._logger = props.logger;
		}

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

	/** @final */
	public componentWillUnmount() {
		this.unLoaded();
	}
}
