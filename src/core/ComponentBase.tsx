import * as React from "react";

import { IAppTheme } from "@core.themes";
import { ILogger } from "@core.debug";

export interface IComponentProps {
	theme?: IAppTheme;
	logger?: ILogger;
}
export interface IComponentState {}

export abstract class ComponentBase<
	TProps extends IComponentProps,
	TState extends IComponentState
> extends React.Component<TProps, TState> {
	public static defaultProps: Partial<IComponentProps> = {};
	public static defaultState: IComponentState = {};
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
