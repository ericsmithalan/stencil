import { ILocalStorageService } from "@stencil.features/storage";

export class LocalStorageService implements ILocalStorageService {
    private readonly _key: string;

    public constructor() {
        this._key = `__STENCIL_v${process.env.APP_VERSION}__`;
    }

    public get key(): string {
        return this._key;
    }

    public saveState<T = object>(storeState: T): boolean {
        if (!localStorage) {
            return false;
        }

        try {
            const serializedState = JSON.stringify(storeState);
            localStorage.setItem(this._key, serializedState);
            return true;
        } catch (error) {
            throw new Error("store serialization failed");
        }
    }

    public loadState<T = object>(): T | undefined {
        if (!localStorage) {
            return;
        }

        try {
            const serializedState = localStorage.getItem(this._key);
            if (serializedState == null) {
                return;
            }
            return JSON.parse(serializedState);
        } catch (error) {
            throw new Error("store deserialization failed");
        }
    }
}
