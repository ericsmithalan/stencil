import * as React from "react";

import { IVector2, IBounds, IDegree, ISize } from "@core.interfaces";
import { Control, IControlProps, IControlState } from "@core.components";
import { VectorHelpers } from "@core.utils";

export interface ISVGProps extends IControlProps {
    fill: string;
    width: number;
    height: number;
    translate: IVector2;
    scale: IVector2;
    rotate: IDegree;
    preserveAspect: boolean;
    stroke: string;
    strokeWidth: number;
    clip: boolean;
}

export interface ISVGState extends IControlState {
    fill: string;
    width: number;
    height: number;
    translate: IVector2;
    scale: IVector2;
    rotate: IDegree;
    stroke: string;
    strokeWidth: number;
    clip: boolean;
}

export abstract class SVGBase<TProps extends ISVGProps, TState extends ISVGState> extends Control<TProps, TState> {
    public static defaultProps: ISVGProps = {
        fill: "red",
        width: 0,
        height: 0,
        translate: { x: 0, y: 0 },
        scale: { x: 1, y: 1 },
        rotate: { deg: 0 },
        preserveAspect: true,
        stroke: "green",
        strokeWidth: 3,
        clip: true
    };

    private _isAutoSizeX: boolean = false;
    private _isAutoSizeY: boolean = false;

    private readonly _containerRef: React.RefObject<HTMLDivElement>;
    private readonly _svgRef: React.RefObject<SVGSVGElement>;
    private _calculated: boolean;

    public constructor(props: TProps) {
        super(props);

        if (this.props.width <= 0) {
            this._isAutoSizeX = true;
        }

        if (this.props.height <= 0) {
            this._isAutoSizeY = true;
        }

        this._containerRef = React.createRef();
        this._svgRef = React.createRef();
    }

    //preserveAspectRatio="xMidYMid meet"
    public componentWillMount() {
        super.componentDidMount();

        this.setState({
            fill: this.props.fill,
            width: this.props.width,
            height: this.props.height,
            translate: this.props.translate,
            scale: this.props.scale,
            rotate: this.props.rotate
        });
    }

    protected calculateSize(): ISize {
        let width: number = this.props.width;
        let height: number = this.props.height;

        if (this.containerElement.parentElement) {
            const parent = this.containerElement.parentElement;

            if (this._isAutoSizeX) {
                width = parent.offsetWidth;
            }
            if (this._isAutoSizeY) {
                height = parent.offsetHeight;
            }

            if (this.props.preserveAspect) {
                const min = Math.min(width, height);
                width = min;
                height = min;
            }
        }

        return { width: width, height: height };
    }

    public componentDidMount() {
        super.componentDidMount();

        const size: ISize = this.calculateSize();

        this.width = size.width;
        this.height = size.height;
    }

    public get svgElement(): SVGSVGElement {
        return this._svgRef.current as SVGSVGElement;
    }

    public get containerElement(): HTMLDivElement {
        return this._containerRef.current as HTMLDivElement;
    }

    public get fill(): string {
        return this.state.fill;
    }

    public set fill(value: string) {
        if (this.state.fill !== value) {
            this.setState({ fill: value });
        }
    }

    public get width(): number {
        return this.state.width;
    }

    public set width(value: number) {
        if (this.state.width !== value) {
            this.setState({ width: value });
        }
    }

    public get height(): number {
        return this.state.width;
    }

    public set height(value: number) {
        if (this.state.height !== value) {
            this.setState({ height: value });
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

    public get viewBox(): IBounds {
        return { x: this.translate.x, y: this.translate.y, width: this.width, height: this.height };
    }

    public render() {
        return (
            <div ref={this._containerRef} className="svg-container" style={{ width: this.width, height: this.height }}>
                <svg
                    style={{ fillRule: "evenodd" }}
                    ref={this._svgRef}
                    className="svg-image"
                    fill={this.fill}
                    viewBox={`${this.translate.x} ${this.translate.y} ${this.width} ${this.height}`}
                    preserveAspectRatio={this.preserveAspect()}
                >
                    {this.clipPath()}
                    <g clipPath="url(#clipper)" transform={this.transformString()}>
                        {this.strokeRect()}
                        {this.props.children}
                    </g>
                </svg>
            </div>
        );
    }

    protected clipPath(): JSX.Element | null {
        if (this.props.clip) {
            return (
                <clipPath id="clipper">
                    <rect width={this.width} height={this.height} x={this.translate.x} y={this.translate.y} />
                </clipPath>
            );
        }

        return null;
    }

    protected strokeRect(): JSX.Element | null {
        if (this.props.strokeWidth > 0) {
            const strokeOffset = this.props.strokeWidth * 2;
            const width = this.width - strokeOffset;
            const height = this.height - strokeOffset;

            return <rect stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} width={width} height={height} x={this.translate.x} y={this.translate.y} />;
        }

        return null;
    }

    protected preserveAspect(): string {
        let str = "";

        if (this.props.preserveAspect) {
            //str += "xMidYMid meet";
            str += "none";
        }

        return str;
    }

    protected transformString(): string {
        return `rotate(${this.rotate.deg}) translate(${this.translate.x} ${this.translate.y}) scale(${this.scale.x} ${this.scale.y})`;
    }
}
