import * as React from "react";

import { ISize } from "@core.interfaces";
import { Settings } from "@core.settings";
import { Control, IControlProps, IControlState } from "@core.components";

type IconSizeTypes = "small" | "normal" | "large";

interface IIconPropTypes extends IControlProps {
    size: IconSizeTypes;
    source: JSX.Element;
}

interface IIconStateTypes extends IControlState {
    color: string;
}

export class Icon extends Control<IIconPropTypes, IIconStateTypes> {
    private readonly _size: ISize;

    public static defaultProps: Partial<IIconPropTypes> = {
        size: "normal"
    };

    public constructor(props: IIconPropTypes) {
        super(props);

        this._size = this._getSize(props.size);

        this.state = {
            color: this.theme.colors.icon.press
        };
    }

    public get color(): string {
        return this.state.color;
    }

    public set color(value: string) {
        if (this.state.color !== value) {
            this.setState({ color: value });
        }
    }

    public render() {
        return (
            <svg
                className="iconContainer"
                width={this._size.width}
                height={this._size.height}
                fill={this.state.color}
                preserveAspectRatio="xMaxYMax meet"
                viewBox={`0, 0, ${this._size.width}, ${this._size.height}`}
            >
                {this.props.source}
            </svg>
        );
    }

    private _getSize(size: IconSizeTypes): ISize {
        switch (size) {
            case "small":
                return {
                    width: 18,
                    height: 18
                };
            case "normal":
                return {
                    width: 24,
                    height: 24
                };
            case "large":
                return {
                    width: 32,
                    height: 32
                };
            default:
                throw new Error(`size type is out of range ${size}`);
        }
    }
}
