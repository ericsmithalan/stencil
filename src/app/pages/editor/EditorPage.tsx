import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@stencil.components/index";
import { Grid } from "@stencil.app/drawings";

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
