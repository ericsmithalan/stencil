import {
	ComponentBase,
	IComponentProps,
	IComponentState
} from "@core/components";

export interface IPageProps extends IComponentProps {}

export interface IPageState extends IComponentState {}

export abstract class PageBase<
	TProps extends IPageProps,
	TState extends IPageState
> extends ComponentBase<TProps, TState> {
	public constructor(props: TProps) {
		super(props);
	}
}
