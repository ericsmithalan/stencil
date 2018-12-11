import { ITheme } from "@core.themes";

import { ComponentBase } from "@core";

export interface IPageProps {
    theme: ITheme;
}

export interface IPageState {
    theme: ITheme;
}

export abstract class PageBase<
    TProps extends IPageProps,
    TState extends IPageState
> extends ComponentBase<TProps, TState> {
    public constructor(props: TProps) {
        super(props);

        this.state = {
            theme: this.props.theme
        } as TState;
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
}
