import { IAction } from "@store";
import { Reducer } from "redux";

export namespace ShellRedux2 {
    export type ThemeColor = "light" | "dark";

    export const enum ActionTypes {
        CHANGE_TITLE = "@@shell/CHANGE_TITLE",
        CHANGE_TITLEBAR_VISIBILITY = "@@shell/CHANGE_TITLEBAR_VISIBILITY"
    }

    export interface IShellReduxState {
        title: string;
        isTitlebarVisible: boolean;
    }

    const initialState: IShellReduxState = {
        title: "initial title",
        isTitlebarVisible: true
    };

    export const shellReduce: Reducer<IShellReduxState> = (
        state: IShellReduxState = initialState,
        action: IAction<any>
    ) => {
        switch (action.type) {
            case ActionTypes.CHANGE_TITLE:
                console.log("STATE: ", { ...state, title: action.value });
                return { ...state, title: action.value };
            case ActionTypes.CHANGE_TITLEBAR_VISIBILITY:
                console.log("STATE: ", { ...state, title: action.value });
                return { ...state, isTitlebarVisible: action.value };
            default: {
                return state;
            }
        }
    };
}
