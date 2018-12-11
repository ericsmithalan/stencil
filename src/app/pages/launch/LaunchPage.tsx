import * as React from "react";

import {
    PureComponentBase,
    IComponentProps,
    IComponentState
} from "@stencil.components/index";

interface ILaunchProps extends IComponentProps {}
interface ILaunchState extends IComponentState {}

export class LaunchPage extends PureComponentBase<ILaunchProps, ILaunchState> {
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
