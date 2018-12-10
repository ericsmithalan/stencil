import * as React from "react";

import { IAppTheme } from "@core.themes";
import { ILogger } from "@core.debug";

export interface IControlProps {
	theme?: IAppTheme;
	logger?: ILogger;
}
export interface IControlState {
	theme?: IAppTheme;
}

export abstract class ControlBase<
	TProps extends IControlProps,
	TState extends IControlState
> extends React.PureComponent<TProps, TState> {
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
		this.state = {
			theme: this.props.theme
		} as TState;
	}

	public static getDerivedStateFromProps(
		props: IControlProps,
		state: IControlState
	) {
		console.log("CONTROL: props", props);
		console.log("CONTROL: state", state);
		if (props.theme && state.theme) {
			console.log("theme should changed");
			if (props.theme.id !== state.theme.id) {
				console.log("theme changed");
				return {
					theme: props.theme
				};
			}
		}

		return null;
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
