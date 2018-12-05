import * as React from "react";
import { Titlebar } from "./titlebar/Titlebar";
import "./shell.css";

interface IShellProps {}

interface IShellState {}

export class Shell extends React.Component<IShellProps, IShellState> {
    private _titlebar: React.RefObject<Titlebar>;

    public constructor(props: IShellProps) {
        super(props);

        this._titlebar = React.createRef();
    }

    public get titlebar(): Titlebar {
        return this._titlebar.current as Titlebar;
    }

    public componentDidMount() {
        this.titlebar.setTitle("cool title dude");
    }

    public render() {
        return (
            <div className="shell">
                <div className="shellTitlebar">
                    <Titlebar height={50} ref={this._titlebar} />
                </div>
                <div className="shellContent">{this.props.children}</div>
            </div>
        );
    }
}
