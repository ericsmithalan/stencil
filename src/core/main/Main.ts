import * as IsDev from "electron-is-dev";
import * as Path from "path";

import { BrowserWindow, app, remote } from "electron";

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

function createWindow(): void {
	window = new BrowserWindow({
		height: 780,
		width: 1024,
		frame: false,
		autoHideMenuBar: true,
		backgroundColor: "#222222"
	});

	const file = "../build/index.html";
	const url = "localhost:3000";

	window.loadURL(
		IsDev ? `http://${url}` : `file://${Path.join(__dirname, file)}`
	);
	window.webContents.openDevTools();

	window.on("closed", () => {
		window = null;

		app.quit();
	});

	window.show();
	window.focus();
}
