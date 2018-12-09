import * as React from "react";

import { ISize } from "@core.interfaces";
import { UIControlBase, IUIControlProps, IUIControlState } from "@core";
import { SVG } from "@core.components";
import { SizeType } from "@core.enums";

export interface IIconProps extends IUIControlProps {
    sizeType: SizeType;
}

export interface IIconState extends IUIControlState {
    color: string;
}

export abstract class IconBase extends UIControlBase<HTMLDivElement, IIconProps, IIconState> {
    private readonly _size: ISize;
    private readonly _svgRef: React.RefObject<SVG>;

    public static defaultProps: IIconProps = {
        sizeType: SizeType.Normal,
        preserveAspect: true,
        allowAutoScale: false,
        width: 0,
        height: 0
    };

    protected constructor(props: IIconProps) {
        super(props);

        this._svgRef = React.createRef();

        this.state = {
            width: this.props.width,
            height: this.props.height,
            color: "purple"
        };
    }

    protected abstract renderIcon(): React.ReactNode;

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

    protected calculateSize(): ISize {
        console.log("SIZE CALLED");
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
                throw new Error(`size type is out of range ${this.props.sizeType}`);
        }
    }

    public render() {
        return (
            <div ref={this._containerRef}>
                <SVG ref={this._svgRef} width={this.width} height={this.height}>
                    {this.renderIcon()}
                </SVG>
            </div>
        );
    }
}
