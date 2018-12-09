import * as React from "react";

import { IInteractiveColorScale, ISize } from "@core.interfaces";

import { IconBase } from "@core.icons";
import { Settings } from "@core.settings";
import { Control, IControlProps, IControlState } from "@core.components";
import { SizeType } from "@core.enums";
import { ThemeHelpers } from "@app.theme";

export interface IIconButtonProps extends IControlProps {
    size: SizeType;
    source: JSX.Element;
    isSelectable: boolean;
    onClick(event: React.MouseEvent): void;
    buttonTheme: IInteractiveColorScale;
    iconTheme: IInteractiveColorScale;
}

export interface IIconButtonState extends IControlState {
    color: string;
    isSelected: boolean;
}

export class IconButton extends Control<IIconButtonProps, IIconButtonState> {
    private readonly _size: ISize;
    private readonly _iconRef: React.RefObject<IconBase>;

    public static defaultProps: Partial<IIconButtonProps> = {
        size: SizeType.Normal,
        isSelectable: false,
        onClick: (event: React.MouseEvent): void => {},
        buttonTheme: Settings.themeManager.current.uiStyles.titlebarButtonTheme,
        iconTheme: Settings.themeManager.current.uiStyles.titlebarButtonIconTheme
    };

    public constructor(props: IIconButtonProps) {
        super(props);

        this._iconRef = React.createRef();
        this._size = ThemeHelpers.getIconButtonSize(props.size);

        this.state = {
            color: Settings.themeManager.current.colors.icon.default,
            isSelected: false
        };
    }

    private get _icon(): IconBase {
        return this._iconRef.current as IconBase;
    }

    public render() {
        return (
            <a href="#">
                <IconBase ref={this._iconRef} />>
            </a>
        );
    }
}
