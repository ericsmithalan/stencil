import * as React from "react";

import {
    IControlProps,
    IControlState,
    PureControlBase
} from "@core/components";

interface ILaunchProps extends IControlProps {}
interface ILaunchState extends IControlState {}

export class LaunchPage extends PureControlBase<ILaunchProps, ILaunchState> {
    public constructor(props: ILaunchProps) {
        super(props);
    }

    public render() {
        return (
            <div className="launch">
                <div className="launch-content">loading...</div>
            </div>
        );
    }
}
