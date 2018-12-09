import * as React from "react";
import { ControlBase } from "@core";

interface ILaunchProps {}
interface ILaunchState {}

export class LaunchPage extends ControlBase<ILaunchProps, ILaunchState> {
    public constructor(props: ILaunchProps) {
        super(props);
    }

    public render() {
        const { colors } = this.theme;

        return (
            <div style={{ color: colors.font.highMedium }} className="launch">
                <div className="launch-content">loading...</div>
            </div>
        );
    }
}
