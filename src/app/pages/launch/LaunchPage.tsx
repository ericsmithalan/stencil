import * as React from "react";
import { ControlBase } from "@core";

interface ILaunchProps {}
interface ILaunchState {}

export class LaunchPage extends ControlBase<ILaunchProps, ILaunchState> {
    public constructor(props: ILaunchProps) {
        super(props);
    }

    public render() {
        return (
            <div
                style={{ color: this.theme.colors.font.highMedium }}
                className="launch"
            >
                <div className="launch-content">loading...</div>
            </div>
        );
    }
}
