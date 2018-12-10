import * as React from "react";

import { ControlBase, IComponentProps, IComponentState } from "@core";

interface ILaunchProps extends IComponentProps {}
interface ILaunchState extends IComponentState {}

export class LaunchPage extends ControlBase<ILaunchProps, ILaunchState> {
	public constructor(props: ILaunchProps) {
		super(props);
	}

	public render() {
		const { colors } = this.state.theme;
		return (
			<div style={{ color: colors.font.highMedium }} className="launch">
				<div className="launch-content">loading...</div>
			</div>
		);
	}
}
