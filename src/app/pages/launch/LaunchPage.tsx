import * as React from "react";

import { ControlBase, IComponentProps, IComponentState } from "@core";

interface ILaunchProps extends IComponentProps {}
interface ILaunchState extends IComponentState {}

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
