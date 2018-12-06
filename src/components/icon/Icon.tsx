import * as React from "react";

type IconPropTypes = {
    width: number;
    height: number;
    color: string;
    source: JSX.Element;
};

type IconStateTypes = {
    color: string;
};

export class Icon extends React.PureComponent<IconPropTypes, IconStateTypes> {
    private _source: JSX.Element;
    public static defaultProps: Partial<IconPropTypes> = {
        width: 32,
        height: 32,
        color: "red"
    };

    private _color: string;

    public constructor(props: IconPropTypes) {
        super(props);

        this.state = {
            color: this.props.color
        };
    }

    public get source(): JSX.Element {
        return this._source;
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        if (this._color !== value) {
            this._color = value;
            this.setState({ color: value });
        }
    }

    public set source(value: JSX.Element) {
        this._source = value;
    }

    public componentWillMount() {
        if (this.props.color) {
            this.color = this.props.color;
        }

        if (this.props.source) {
            this.source = this.props.source;
        }
    }

    public render() {
        return (
            <svg
                className="iconContainer"
                width={this.props.width}
                height={this.props.height}
                fill={this.state.color}
                transform="0 0"
                preserveAspectRatio="xMaxYMax meet"
                viewBox={`0, 0, ${this.props.width}, ${this.props.height}`}
            >
                {this._source}
            </svg>
        );
    }
}
