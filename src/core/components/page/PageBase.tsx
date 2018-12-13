import { ControlBase, IControlProps, IControlState } from "@core/components";

export interface IPageProps extends IControlProps {}

export interface IPageState extends IControlState {}

export abstract class PageBase<
    TProps extends IPageProps,
    TState extends IPageState
> extends ControlBase<TProps, TState> {
    public constructor(props: TProps) {
        super(props);
    }
}
