import * as React from "react";

interface IEditorProps {}

interface IEditorState {}

export class EditorPage extends React.Component<IEditorProps, IEditorState> {
	public constructor(props: IEditorProps) {
		super(props);
	}

	public render() {
		return <div className="editor">Editor</div>;
	}
}
