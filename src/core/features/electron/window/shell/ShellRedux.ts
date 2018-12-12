import { IAction } from "@store";
import { IShellState } from "@features/electron";
import { Reducer } from "redux";
const initialState: IShellState = {
    title: "cool",
    isTitlebarVisible: true
};

export const UPDATE_TITLE_ACTION = "@@shell/UPDATE_TITLE_ACTION";
export type UPDATE_TITLE_ACTION = typeof UPDATE_TITLE_ACTION;

export const UPDATE_TITLEBAR_VISIBILITY = "@@shell/UPDATE_TITLEBAR_VISIBILITY";
export type UPDATE_TITLEBAR_VISIBILITY = typeof UPDATE_TITLEBAR_VISIBILITY;

export const shellReduce: Reducer<IShellState> = (
    state: IShellState = initialState,
    action: IAction<any>
) => {
    switch (action.type) {
        case UPDATE_TITLE_ACTION:
            console.log("STATE: ", { ...state, title: action.value });
            return { ...state, title: action.value };
        case UPDATE_TITLEBAR_VISIBILITY:
            console.log("STATE: ", { ...state, title: action.value });
            return { ...state, isTitlebarVisible: action.value };
        default: {
            return state;
        }
    }
};

const updateTitle = (value: string): IAction<string> => ({
    type: UPDATE_TITLE_ACTION,
    value
});

const updateTitlebarVisibility = (value: boolean): IAction<boolean> => ({
    type: UPDATE_TITLEBAR_VISIBILITY,
    value
});

export const shellActions = {
    updateTitle: updateTitle,
    updateTitlebarVisibility: updateTitlebarVisibility
};
