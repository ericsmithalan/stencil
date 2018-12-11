import { IAction } from "@stencil.store";

export interface IShellState {
    title: string;
    isTitlebarVisible: boolean;
}

export namespace ShellRedux {
    const defaultState: IShellState = {
        title: "cool",
        isTitlebarVisible: true
    };

    export const UPDATE_TITLE_ACTION = "UPDATE_TITLE_ACTION";
    export type UPDATE_TITLE_ACTION = typeof UPDATE_TITLE_ACTION;

    const updateTitle = (value: string): IAction<string> => ({
        type: UPDATE_TITLE_ACTION,
        value
    });

    export const reduce = (
        state: IShellState = defaultState,
        action: IAction<string>
    ): IShellState => {
        switch (action.type) {
            case UPDATE_TITLE_ACTION:
                return { ...state, title: action.value };
        }

        return state;
    };

    export const actions = {
        updateTitle: updateTitle
    };
}
