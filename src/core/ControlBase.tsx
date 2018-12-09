import * as React from "react";

import { IAppTheme, ILogger } from "@core.interfaces";

export interface IControlProps {
	theme?: IAppTheme;
	logger?: ILogger;
}
export interface IControlState {}

export abstract class ControlBase<
	TProps extends IControlProps,
	TState extends IControlState
> extends React.PureComponent<TProps, TState> {
	public static defaultProps: Partial<IControlProps> = {};
	public static defaultState: IControlState = {};
	protected readonly _theme: IAppTheme;
	protected readonly _logger: ILogger;
	private _isLoaded: boolean;

	protected constructor(props: TProps) {
		super(props);

		if (props.theme) {
			this._theme = props.theme;
		}

		if (props.logger) {
			this._logger = props.logger;
		}

		this._isLoaded = false;
	}

	/** @virtual */
	protected loaded(): void {}

	/** @virtual */
	protected willLoad(): void {}

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

	protected get isLoaded(): boolean {
		return this._isLoaded;
	}

	protected set isLoaded(value: boolean) {
		this._isLoaded = value;
	}

	protected get theme(): IAppTheme {
		return this._theme;
	}

	protected get logger(): ILogger {
		return this._logger;
	}
}
