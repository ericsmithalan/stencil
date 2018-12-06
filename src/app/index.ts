import * as IsDev from "electron-is-dev";
import * as Path from "path";

import { BrowserWindow, app } from "electron";

let window: BrowserWindow | null;

app.on("ready", () => {
	createWindow();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (window === null) {
		createWindow();
	}
});

app.on("browser-window-blur", () => {});

app.on("browser-window-focus", () => {});

function createWindow(): void {
	window = new BrowserWindow({
		height: 780,
		width: 1024,
		frame: false,
		autoHideMenuBar: true
	});

	const file = "../build/index.html";
	const url = "localhost:3000";

	window.loadURL(IsDev ? `http://${url}` : `file://${Path.join(__dirname, file)}`);

	window.webContents.openDevTools();

	window.on("closed", () => {
		window = null;
	});
}
