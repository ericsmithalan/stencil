import { DarkTheme, IAppTheme, LightTheme, ThemeType } from "@core.themes";

import { Subject } from "rxjs";

export class ThemeManager {
	private readonly _current: Subject<IAppTheme>;

	public constructor() {
		this._current = new Subject<IAppTheme>();
		this.setTheme(ThemeType.Dark);
	}

	public setTheme(name: ThemeType): void {
		switch (name) {
			case "dark":
				this._current.next(DarkTheme.getTheme());
				break;
			case "light":
				this._current.next(LightTheme.getTheme());
				break;
			default:
				this._current.next(DarkTheme.getTheme());
				break;
		}
	}

	public get current(): Subject<IAppTheme> {
		return this._current;
	}
}
