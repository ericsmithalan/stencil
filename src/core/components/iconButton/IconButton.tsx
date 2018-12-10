import * as React from "react";
import { UIControlBase, IUIControlProps, IUIControlState } from "@core";
import { Icon } from "@core";
import { DarkTheme } from "@core.themes";

export interface IIconButtonProps extends IUIControlProps {
    onClick(e: MouseEvent): void;
}

export interface IIconButtonState extends IUIControlState {}

export class IconButton extends UIControlBase<
    HTMLAnchorElement,
    IIconButtonProps,
    IIconButtonState
> {
    public constructor(props: IIconButtonProps) {
        super(props);

        this.state = {
            theme: DarkTheme.getTheme()
        } as IIconButtonState;
    }

    protected click(e: MouseEvent) {
        super.click(e);

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    public render(): JSX.Element {
        const { buttonTheme } = this.state.theme.uiStyles;

        return (
            <a
                style={{
                    backgroundColor: buttonTheme.default,
                    width: this.state.width,
                    height: this.state.height
                }}
                ref={this._containerRef}
                href="#"
            >
                <Icon />
            </a>
        );
    }
}
