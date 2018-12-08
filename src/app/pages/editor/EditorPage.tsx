import * as React from "react";

import { IPageProps, IPageState, Page } from "@app.pages";

import { SVG } from "@core.components";

interface IEditorProps extends IPageProps {}

interface IEditorState extends IPageState {}

export class EditorPage extends Page<IEditorProps, IEditorState> {
    private readonly _svgRef: React.RefObject<SVG>;

    public constructor(props: IEditorProps) {
        super(props);
        this._svgRef = React.createRef();
    }

    public componentDidMount() {
        super.componentDidMount();

        const svg: SVG = this._svgRef.current as SVG;

        // setTimeout(() => {
        //     svg.fill = "blue";
        // }, 3000);
    }

    public render() {
        return (
            <div style={{ color: this.theme.colors.font.highMedium }} className="editor">
                <div>Hello</div>

                <div style={{ width: 32 }}>
                    <SVG ref={this._svgRef} />
                </div>
            </div>
        );
    }
}
