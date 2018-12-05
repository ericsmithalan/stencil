import * as React from "react";
import "./titlebar.css";

type TitlebarPropTypes = {
    height: number;
};

type TitlebarStateTypes = {
    title: string | null;
};

export class Titlebar extends React.Component<TitlebarPropTypes, TitlebarStateTypes> {
    public static defaultProps: Partial<TitlebarPropTypes> = {
        height: 30
    };

    public constructor(props: TitlebarPropTypes) {
        super(props);

        this.state = {
            title: null
        };
    }

    public setTitle(value: string | null) {
        if (this.state.title != value) {
            this.setState({ title: value });
        }
    }

    public render() {
        return (
            <div style={{ height: this.props.height }} className="titlebar">
                <div className="left">
                    <svg viewBox="0,0, 30,30">
                        <rect width="30" height="30" fill="#000000" />
                    </svg>
                </div>
                <div className="middle">{this._renderTitle()}</div>
                <div className="right" />
            </div>
        );
    }

    private _renderTitle(): JSX.Element | null {
        if (this.state.title) {
            return <div className="title">{this.state.title}</div>;
        }

        return null;
    }
}
