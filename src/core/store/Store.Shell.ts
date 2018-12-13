import { Reducer } from "redux";
import { action } from "typesafe-actions";
import { ISize } from "@core/models";

export namespace ShellStore {
    /** STATE */
    export interface IState {
        title: string;
        isTitlebarVisible: boolean;
        width: number;
        height: number;
        size: ISize;
    }

    /** INITIAL STATE */
    export const initialState: ShellStore.IState = {
        title: "initial title",
        isTitlebarVisible: true,
        height: 0,
        width: 0,
        size: { width: 0, height: 0 }
    };

    /** ACTION TYPES */
    export const enum actionTypes {
        CHANGE_TITLE = "@@shell/CHANGE_TITLE",
        CHANGE_TITLEBAR_VISIBILITY = "@@shell/CHANGE_TITLEBAR_VISIBILITY"
    }

    /** ACTIONS */
    export const actions = {
        changeTitle: (value: string) => action(actionTypes.CHANGE_TITLE, value),
        changeTitlebarVisibility: (value: boolean) =>
            action(actionTypes.CHANGE_TITLEBAR_VISIBILITY, value)
    };

    /** REDUCER */
    export const reducer: Reducer<ShellStore.IState> = (
        state: IState = initialState,
        action
    ) => {
        switch (action.type) {
            case actionTypes.CHANGE_TITLE:
                return { ...state, title: action.payload };
            case actionTypes.CHANGE_TITLEBAR_VISIBILITY:
                return { ...state, isTitlebarVisible: action.payload };
            default: {
                return state;
            }
        }
    };
}
