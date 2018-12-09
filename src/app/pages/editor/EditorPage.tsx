import * as React from "react";

import { IPageProps, IPageState, PageBase } from "@app.pages";

import { SVG } from "@core.components";

interface IEditorProps extends IPageProps {}

interface IEditorState extends IPageState {}

export class EditorPage extends PageBase<IEditorProps, IEditorState> {
    public constructor(props: IEditorProps) {
        super(props);
    }

    public render() {
        return (
            <div style={{ color: this.theme.colors.font.highMedium }} className="editor">
                <div>Hello</div>
            </div>
        );
    }
}
