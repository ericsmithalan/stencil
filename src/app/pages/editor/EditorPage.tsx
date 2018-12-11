import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@core.components";
import { Grid } from "@app.drawings";

export class EditorPage extends PageBase<IPageProps, IPageState> {
    public render() {
        return (
            <div className="editor">
                <div>Edit Page</div>

                <Grid />
            </div>
        );
    }
}
