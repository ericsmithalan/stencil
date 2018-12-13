import * as React from "react";

import { IDegree, IVector2 } from "@core/models";
import {
    IUIControlProps,
    IUIControlState,
    UIControlBase
} from "@core/components";

import { VectorHelpers } from "@core/utils";

export interface ISVGProps extends IUIControlProps {
    fill: string;
    translate: IVector2;
    scale: IVector2;
    rotate: IDegree;
    stroke: string;
    strokeWidth: number;
    clip: boolean;
}

export interface ISVGState extends IUIControlState {
    fill: string;
    translate: IVector2;
    scale: IVector2;
    rotate: IDegree;
    stroke: string;
    strokeWidth: number;
    clip: boolean;
}

export class SVG extends UIControlBase<HTMLDivElement, ISVGProps, ISVGState> {
    public static defaultProps: Partial<ISVGProps> = {
        fill: "transparent",
        width: 0,
        height: 0,
        translate: { x: 0, y: 0 },
        scale: { x: 1, y: 1 },
        rotate: { deg: 0 },
        preserveAspect: true,
        stroke: "transparent",
        strokeWidth: 1,
        clip: true,
        allowAutoScale: true
    };

    private readonly _svgRef: React.RefObject<SVGSVGElement>;

    public constructor(props: ISVGProps) {
        super(props);

        this._svgRef = React.createRef();

        this.state = {
            fill: this.props.fill,
            width: this.props.width,
            height: this.props.height,
            translate: this.props.translate,
            scale: this.props.scale,
            rotate: this.props.rotate
        } as ISVGState;
    }

    protected loaded(): void {
        super.loaded();
    }

    protected unLoaded(): void {
        super.unLoaded();
    }

    public get svgElement(): SVGSVGElement {
        return this._svgRef.current as SVGSVGElement;
    }

    public get fill(): string {
        return this.state.fill;
    }

    public set fill(value: string) {
        if (this.state.fill !== value) {
            this.setState({ fill: value });
        }
    }

    public get translate(): IVector2 {
        return this.state.translate;
    }

    public set translate(value: IVector2) {
        if (!VectorHelpers.isVector2Equal(this.state.translate, value)) {
            this.setState({ translate: value });
        }
    }

    public get rotate(): IDegree {
        return this.state.rotate;
    }

    public set rotate(value: IDegree) {
        if (this.state.rotate.deg !== value.deg) {
            this.setState({ rotate: value });
        }
    }

    public get scale(): IVector2 {
        return this.state.scale;
    }

    public set scale(value: IVector2) {
        if (!VectorHelpers.isVector2Equal(this.state.scale, value)) {
            this.setState({ scale: value });
        }
    }

    public render(): JSX.Element {
        return (
            <div
                ref={this._containerRef}
                className="svg-container"
                style={{ width: this.width, height: this.height }}
            >
                <svg
                    width={this.width}
                    height={this.height}
                    x={this.translate.x}
                    y={this.translate.y}
                    ref={this._svgRef}
                    className="svg-image"
                    fill={this.fill}
                    viewBox={`${this.translate.x} ${this.translate.y} ${
                        this.width
                    } ${this.height}`}
                >
                    {this.clipPath()}
                    <g
                        clipPath="url(#clipper)"
                        transform={this.transformString()}
                    >
                        {this._renderChildren()}
                        {this.strokeRect()}
                    </g>
                </svg>
            </div>
        );
    }

    private _renderChildren(): React.ReactNode {
        if (this.props.children) {
            return this.props.children;
        } else {
            return (
                <g
                    width={this.width}
                    height={this.height}
                    x={this.translate.x}
                    y={this.translate.y}
                >
                    <rect
                        fill={this.state.fill}
                        width={this.width}
                        height={this.height}
                        x={this.translate.x}
                        y={this.translate.y}
                    />

                    <text
                        fill="#ffffff"
                        style={{ fontSize: 10, opacity: 0.3 }}
                        x={10}
                        y={this.height / 2 + 5}
                        width={this.width}
                        height={this.height}
                    >
                        PH
                    </text>
                </g>
            );
        }
    }

    protected clipPath(): JSX.Element | null {
        if (this.props.clip) {
            return (
                <clipPath id="clipper">
                    <rect
                        fill="transparent"
                        width={this.width}
                        height={this.height}
                        x={this.translate.x}
                        y={this.translate.y}
                    />
                </clipPath>
            );
        }

        return null;
    }

    protected strokeRect(): JSX.Element | null {
        if (this.props.strokeWidth > 0) {
            return (
                <rect
                    fill="transparent"
                    stroke={this.props.stroke}
                    strokeWidth={this.props.strokeWidth}
                    width={this.width}
                    height={this.height}
                    x={this.translate.x}
                    y={this.translate.y}
                />
            );
        }

        return null;
    }

    protected preserveAspect(): string {
        let str = "";

        if (this.props.preserveAspect) {
            str += "none";
        }

        return str;
    }

    protected transformString(): string {
        return `rotate(${this.rotate.deg}) translate(${this.translate.x} ${
            this.translate.y
        }) scale(${this.scale.x} ${this.scale.y})`;
    }
}
