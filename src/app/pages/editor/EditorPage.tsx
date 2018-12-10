import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@core";
import { Grid } from "@app.drawings";

export class EditorPage extends PageBase<IPageProps, IPageState> {
    public render() {
        return (
            <div
                style={{ color: this.state.theme.colors.font.highMedium }}
                className="editor"
            >
                <div>Edit Page</div>

                <Grid theme={this.state.theme} />
            </div>
        );
    }
}
