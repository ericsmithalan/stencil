import * as React from "react";

interface ILaunchProps {}

interface ILaunchState {}

export class Launch extends React.Component<ILaunchProps, ILaunchState> {
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
