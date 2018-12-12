import { Action } from "redux";
export interface IAction<T> extends Action {
    type: any;
    value: T;
}
