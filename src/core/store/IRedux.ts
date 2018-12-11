export interface IRedux<TState, TAction> {
    actionTypes: object;
    actions: object;
    reduce(state: TState, action: TAction): TState;
}
