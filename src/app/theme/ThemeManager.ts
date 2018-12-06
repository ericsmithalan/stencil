import { IAppTheme } from "@interfaces";
import { Themes } from "./Themes";

type AvailableThemes = "dark" | "light";

export class ThemeManager {
	private _current: IAppTheme;

	public constructor() {
		this._current = Themes.dark();
	}

	public setTheme(name: AvailableThemes): void {
		if (this._current.id !== name) {
			switch (name) {
				case "dark":
					this._current = Themes.dark();
					break;
				case "light":
					this._current = Themes.light();
					break;
				default:
					this._current = Themes.dark();
					break;
			}
		}
	}

	public get currentId(): string {
		return this._current.id;
	}

	public get current(): IAppTheme {
		return this._current;
	}
}
