import { DarkTheme, IAppTheme, LightTheme, ThemeType } from "@core.themes";

import { Subject } from "rxjs";

export class ThemeManager {
	private _current: IAppTheme;
	private readonly _themeId: Subject<ThemeType>;

	public constructor() {
		this._themeId = new Subject<ThemeType>();
		this.setTheme(ThemeType.Dark);
	}

	public setTheme(name: ThemeType): void {
		switch (name) {
			case "dark":
				this._current = DarkTheme.getTheme();
				break;
			case "light":
				this._current = LightTheme.getTheme();
				break;
			default:
				this._current = DarkTheme.getTheme();
				break;
		}

		this.currentId.next(name);
	}

	public get currentId(): Subject<ThemeType> {
		return this._themeId;
	}

	public get current(): IAppTheme {
		return this._current;
	}
}
