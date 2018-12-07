import * as React from "react";
import { Icon, IconSource } from "@core.icons";
import { SVG } from "@core.components";
import { Page, IPageProps, IPageState } from "@app.pages";

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

        setTimeout(() => {
            svg.fill = "blue";
        }, 3000);
    }

    public render() {
        return (
            <div style={{ color: this.theme.colors.font.highMedium }} className="editor">
                <div>Hello</div>

                <div style={{ height: 200 }}>
                    <SVG ref={this._svgRef}>
                        <rect shapeRendering="crispEdges" width="100%" height="10%" y="10%" />
                        <rect shapeRendering="crispEdges" width="100%" height="10%" y="45%" />
                        <rect shapeRendering="crispEdges" width="100%" height="10%" y="80%" />
                    </SVG>
                </div>
            </div>
        );
    }
}
