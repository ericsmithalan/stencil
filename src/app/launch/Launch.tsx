import * as React from "react";
import { Settings } from "@settings";

interface ILaunchProps {}

interface ILaunchState {}

export class Launch extends React.Component<ILaunchProps, ILaunchState> {
    public constructor(props: ILaunchProps) {
        super(props);
    }

    public render() {
        const { colors } = Settings.themeManager.current;

        return (
            <div style={{ color: colors.font.highMedium }} className="launch">
                <div className="launch-content">loading...</div>
            </div>
        );
    }
}
