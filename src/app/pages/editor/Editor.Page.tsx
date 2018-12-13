import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@core/components";

import { Grid } from "@app/drawings";
import { ITheme } from "@core/theme";

export interface IEditorPageProps extends IPageProps {
    theme: ITheme;
}

export interface IEditorPageState extends IPageState {}

export class EditorPage extends PageBase<IPageProps, IPageState> {
    protected loaded() {
        super.loaded();
    }

    public render() {
        return (
            <div className="editor-container">
                <div>Edit Page</div>

                <Grid />
            </div>
        );
    }
}
