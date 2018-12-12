import { Reducer } from "redux";
import { action } from "typesafe-actions";

export namespace ShellRedux {
    /** STATE */
    export interface IState {
        title: string;
        isTitlebarVisible: boolean;
    }

    /** INITIAL STATE */
    export const initialState: IState = {
        title: "initial title",
        isTitlebarVisible: true
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
    export const reducer: Reducer<IState> = (
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
