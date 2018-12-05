import * as React from "react";

import { Startup } from "../components/index";

interface IEditorProps {}

interface IEditorState {
	isLoaded: boolean;
}

export class EditorPage extends React.Component<IEditorProps, IEditorState> {
	public constructor(props: IEditorProps) {
		super(props);

		this.state = {
			isLoaded: false
		};
	}

	public componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoaded: true });
		}, 2000);
	}

	public render() {
		if (this.state.isLoaded) {
			return <div className="editor">Editor</div>;
		} else {
			return <Startup />;
		}
	}
}
