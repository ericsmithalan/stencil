export interface ILocalStorageService {
    key: string;
    saveState<T = object>(storeState: T): boolean;
    loadState<T = object>(): T | undefined;
}
