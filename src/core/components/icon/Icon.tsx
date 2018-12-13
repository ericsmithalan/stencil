import * as React from "react";

import { ISize, SizeType } from "@core/models";
import {
    IUIControlProps,
    IUIControlState,
    UIControlBase
} from "@core/components";

import { IButtonTheme } from "@core/theme";
import { SVG } from "@core/components";

export interface IIconProps extends IUIControlProps {
    sizeType: SizeType;
    buttonTheme: IButtonTheme;
    onClick(e: MouseEvent): void;
}

export interface IIconState extends IUIControlState {
    color: string;
}

export class Icon extends UIControlBase<
    HTMLDivElement,
    IIconProps,
    IIconState
> {
    __name = "icon";
    protected readonly _svgRef: React.RefObject<SVG>;

    public static defaultProps: Partial<IIconProps> = {
        sizeType: SizeType.Normal,
        preserveAspect: true,
        allowAutoScale: false,
        width: 0,
        height: 0
    };

    public constructor(props: IIconProps) {
        super(props);

        this._svgRef = React.createRef();

        this.state = {
            width: this.props.width,
            height: this.props.height,
            color: "purple"
        } as IIconState;
    }

    /** @virtual */
    protected renderIcon(): React.ReactNode {
        return (
            <rect
                width={this.state.width}
                fill="red"
                height={this.state.height}
            />
        );
    }

    public get color(): string {
        return this.svg.fill;
    }

    public set color(value: string) {
        if (this.svg.fill !== value) {
            this.svg.fill = value;
        }
    }

    protected get svg(): SVG {
        return this._svgRef.current as SVG;
    }

    protected loaded() {
        super.loaded();
        // setTimeout(() => {
        //     this.color = "yellow";
        // }, 5000);
    }

    protected click(e: MouseEvent) {
        super.click(e);

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    protected calculateSize(): ISize {
        switch (this.props.sizeType) {
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
                throw new Error(
                    `size type is out of range ${this.props.sizeType}`
                );
        }
    }

    public render() {
        return (
            <div ref={this._containerRef} className="icon-container">
                <SVG ref={this._svgRef} width={this.width} height={this.height}>
                    {this.renderIcon()}
                </SVG>
            </div>
        );
    }
}
