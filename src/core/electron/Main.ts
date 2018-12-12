"use strict";

import * as IsDev from "electron-is-dev";
import * as Path from "path";

import { BrowserWindow, app } from "electron";

let mainWindow: BrowserWindow | null;
let splashWindow: BrowserWindow | null;

const mainFile: string = "../build/index.html";
const splashFile: string = "../build/splash.html";
const url: string = "localhost:3000";
const windowProps = {
	height: 780,
	width: 1024,
	frame: false,
	show: false,
	autoHideMenuBar: true,
	backgroundColor: "#222222"
};

app.on("ready", () => {
	createLoadingScreen();
	createWindow();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});

// todo: looks like the window loads before the javascript has been fully built. this
// is requiring a refresh to see the UI
function createWindow(): void {
	mainWindow = new BrowserWindow(windowProps);

	mainWindow.loadURL(
		IsDev ? `http://${url}` : `file://${Path.join(__dirname, mainFile)}`
	);
	mainWindow.webContents.openDevTools();

	mainWindow.on("closed", () => {
		mainWindow = null;
		app.quit();
	});

	mainWindow.webContents.on("did-finish-load", () => {
		if (mainWindow) {
			if (splashWindow) {
				let loadingScreenBounds = splashWindow.getBounds();
				mainWindow.setBounds(loadingScreenBounds);
				splashWindow.close();
			}

			mainWindow.show();
			mainWindow.focus();
		}
	});
}

function createLoadingScreen() {
	splashWindow = new BrowserWindow(
		Object.assign(windowProps, {
			parent: mainWindow
		})
	);

	splashWindow.loadURL(
		IsDev ? `http://${url}` : `file://${Path.join(__dirname, splashFile)}`
	);

	splashWindow.on("closed", () => {
		if (splashWindow) {
			splashWindow = null;
		}
	});

	splashWindow.webContents.on("did-finish-load", () => {
		if (splashWindow) {
			splashWindow.show();
			splashWindow.focus();
		}
	});
}
