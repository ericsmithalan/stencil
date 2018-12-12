import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@core/components";

import { Grid } from "@app/drawings";
import { IRootState } from "@core/store";
import { connect } from "react-redux";

export class Page extends PageBase<IPageProps, IPageState> {
	protected loaded() {
		super.loaded();

		console.log(this.props);
	}

	public render() {
		return (
			<div className="editor">
				<div>Edit Page</div>

				<Grid />
			</div>
		);
	}
}

const mapStateToProps = (state: IRootState) => ({
	theme: state.theme
});

const mapDispatchToProps = (dispatch: any) => ({
	changeTheme: () => dispatch(dispatch.theme.changeTheme(dispatch))
});

export const EditorPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Page);
