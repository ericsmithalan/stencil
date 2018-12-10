import * as React from "react";

import { DarkTheme, IAppTheme } from "@core.themes";

import { ILogger } from "@core.debug";

export interface IComponentProps {
	theme: IAppTheme;
	logger: ILogger;
}
export interface IComponentState {
	theme: IAppTheme;
}

export abstract class ComponentBase<
	TProps extends IComponentProps,
	TState extends IComponentState
> extends React.Component<TProps, TState> {
	protected readonly _logger: ILogger;
	private _isLoaded: boolean;

	public static defaultProps: Partial<IComponentProps> = {
		theme: DarkTheme.getTheme()
	};

	protected constructor(props: TProps) {
		super(props);

		if (props.logger) {
			this._logger = props.logger;
		}

		this._isLoaded = false;
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

	public static getDerivedStateFromProps(
		props: IComponentProps,
		state: IComponentState
	) {
		console.log("COMPONENT: props", props);
		console.log("COMPONENT: state", state);
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

	protected get isLoaded(): boolean {
		return this._isLoaded;
	}

	protected set isLoaded(value: boolean) {
		this._isLoaded = value;
	}

	protected get theme(): IAppTheme {
		return this.state.theme;
	}

	protected get logger(): ILogger {
		return this._logger;
	}
}
