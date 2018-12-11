import { ComponentBase } from "@core.components";

export interface IPageProps {}

export interface IPageState {}

export abstract class PageBase<
    TProps extends IPageProps,
    TState extends IPageState
> extends ComponentBase<TProps, TState> {
    public constructor(props: TProps) {
        super(props);
    }
}