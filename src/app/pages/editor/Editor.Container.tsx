import { IRootStore } from "@core/store";
import { connect } from "react-redux";
import { EditorPage, IEditorPageProps } from "@app/pages";

const mapStateToProps = (state: IRootStore): IEditorPageProps => ({
    theme: state.themeStore.theme
});

const mapDispatchToProps = (dispatch: any) => ({
    changeTheme: () => dispatch(dispatch.theme.changeTheme(dispatch))
});

export const EditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPage);
