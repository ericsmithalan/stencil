import * as React from "react";

import { IAppTheme } from "@core.themes";
import { ILogger } from "@core.debug";
import { Settings } from "src/app/Settings";

export interface IPageProps {
	theme?: IAppTheme;
	logger?: ILogger;
}

export interface IPageState {}

export abstract class PageBase<
	TProps extends IPageProps,
	TState extends IPageState
> extends React.Component<TProps, TState> {
	public static defaultProps: Partial<IPageProps> = {};
	private readonly _theme: IAppTheme;
	private readonly _logger: ILogger;

	public constructor(props: TProps) {
		super(props);

		if (props.theme) {
			this._theme = props.theme;
		}

		if (props.logger) {
			this._logger = props.logger;
		}
	}

	/** @virtual */
	protected willLoad(): void {}

	/** @virtual */
	protected loaded(): void {}

	/** @virtual */
	protected unLoaded(): void {}

	/** @final */
	public componentWillMount() {
		this.willLoad();
	}

	/** @final */
	public componentDidMount() {
		this.loaded();
	}

	/** @final */
	public componentWillUnmount() {
		this.unLoaded();
	}

	protected get theme(): IAppTheme {
		return this._theme;
	}

	protected get logger(): ILogger {
		return this._logger;
	}
}
