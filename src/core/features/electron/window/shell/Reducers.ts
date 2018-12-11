import { ShellActions, IShellState } from "@stencil.features/electron";

export namespace ShellReducers {
    const defaultState: IShellState = {
        title: "shell title",
        isTitlebarVisible: true
    };

    export const reducer = (
        state: IShellState = defaultState,
        action: ShellActions.UpdateTitle
    ) => {
        switch (action.type) {
            case ShellActions.SHELL_UPDATE_TITLE:
                return { ...state, title: action.value };
        }

        return state;
    };
}
