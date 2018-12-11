import * as React from "react";
import { connect } from "react-redux";
import { IPageProps, IPageState, PageBase } from "@stencil.components/index";
import { Grid } from "@stencil.app/drawings";
import { States, Actions } from "@stencil.store";

class Editor extends PageBase<IPageProps, IPageState> {
    public render() {
        return (
            <div className="editor">
                <div>Edit Page</div>

                <Grid />
            </div>
        );
    }
}

const mapStateToProps = (state: States) => ({
    theme: state.themeState
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchMembers: () => dispatch(Actions.theme.changeTheme(dispatch))
});

export const EditorPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
