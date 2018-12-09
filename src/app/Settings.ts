import { IAppTheme } from "@core.themes";
import { ILogger } from "@core.debug";
import { Logger } from "@core.debug";
import { ThemeManager } from "@core";

export class Settings {
	private static _themeManager: ThemeManager;
	private static _logger: ILogger;

	public static get themeManager(): ThemeManager {
		if (!this._themeManager) {
			this._themeManager = new ThemeManager();
		}

		return this._themeManager;
	}

	public static get logger(): ILogger {
		if (!this._logger) {
			this._logger = new Logger();
		}

		return this._logger;
	}
}
