import * as React from "react";

import { ISize } from "@core.interfaces";
import { SVG, UIControl, IUIControlProps, IUIControlState } from "@core.components";
import { SizeType } from "@core.enums";

export interface IIconProps extends IUIControlProps {
    sizeType: SizeType;
    source: JSX.Element;
}

export interface IIconState extends IUIControlState {
    color: string;
}

export abstract class IconBase extends UIControl<IIconProps, IIconState, HTMLDivElement> {
    private readonly _size: ISize;
    private readonly _svgRef: React.RefObject<SVG>;

    public static defaultProps: Partial<IIconProps> = {
        sizeType: SizeType.Normal,
        preserveAspect: true,
        allowAutoScale: false
    };

    protected constructor(props: IIconProps) {
        super(props);

        const size = this._getSize(this.props.sizeType);

        this.width = size.width;
        this.height = size.height;

        this._svgRef = React.createRef();
        this.setDefaultState();
    }

    protected setDefaultState(): IIconState {
        return { color: "purple" } as IIconState;
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

    protected get svg(): SVG {
        return this._svgRef.current as SVG;
    }

    protected loaded() {
        // setTimeout(() => {
        //     this.color = "yellow";
        // }, 5000);
    }

    public render() {
        return (
            <div ref={this._containerRef}>
                <SVG ref={this._svgRef} width={this.width} height={this.height}>
                    {this.iconRendering()}
                </SVG>
            </div>
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
