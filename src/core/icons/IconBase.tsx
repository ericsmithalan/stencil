import * as React from "react";

import { ISize } from "@core.interfaces";
import { SVG, Control, IControlProps, IControlState } from "@core.components";
import { SizeType } from "@core.enums";

export interface IIconProps extends IControlProps {
    size: SizeType;
    source: JSX.Element;
}

export interface IIconState extends IControlState {
    color: string;
}

export abstract class IconBase extends Control<IIconProps, IIconState> {
    private readonly _size: ISize;
    private readonly _svgRef: React.RefObject<SVG>;

    public static defaultProps: Partial<IIconProps> = {
        size: SizeType.Normal
    };

    protected constructor(props: IIconProps) {
        super(props);

        this._svgRef = React.createRef();

        this._size = this._getSize(props.size);
    }

    protected defaultState(): IIconState {
        return { color: this.theme.colors.icon.press } as IIconState;
    }

    protected abstract iconRendering(): React.ReactNode;

    public get color(): string {
        return this.svg.fill;
    }

    public set color(value: string) {
        if (this.svg.fill !== value) {
            this.svg.fill = value;
        }
    }

    public get size(): ISize {
        return this._getSize(this.props.size);
    }

    protected get svg(): SVG {
        return this._svgRef.current as SVG;
    }

    public componentDidMount() {
        setTimeout(() => {
            this.color = "yellow";
        }, 5000);
    }

    public render() {
        return (
            <SVG ref={this._svgRef} width={this.size.width} height={this.size.height}>
                {this.iconRendering()}
            </SVG>
        );
    }

    private _getSize(size: SizeType): ISize {
        switch (size) {
            case SizeType.Small:
                return {
                    width: 18,
                    height: 18
                };
            case SizeType.Normal:
                return {
                    width: 24,
                    height: 24
                };
            case SizeType.Large:
                return {
                    width: 32,
                    height: 32
                };
            default:
                throw new Error(`size type is out of range ${size}`);
        }
    }
}
