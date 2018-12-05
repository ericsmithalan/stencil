import * as IsDev from "electron-is-dev";
import * as Path from "path";
import { BrowserWindow, app, remote } from "electron";

export class Client {
    private static _window: BrowserWindow | null;
    public static isRunning: boolean = false;

    public static get window(): BrowserWindow {
        return remote.getCurrentWindow();
    }

    public static run() {
        app.on("ready", () => {
            this._createWindow();
        });

        app.on("window-all-closed", () => {
            if (process.platform !== "darwin") {
                app.quit();
            }
        });

        app.on("activate", () => {
            if (this.window === null) {
                this._createWindow();
            }
        });

        this.isRunning = true;
    }

    public static close(): void {
        if (this.window != null) {
            this.window.close();
            app.quit();
        }
    }

    public static maximize(): void {
        if (this.window != null) {
            this.window.maximize();
        }
    }

    public static minimize(): void {
        if (this.window != null) {
            this.window.minimize();
        }
    }

    private static _createWindow(): void {
        this._window = new BrowserWindow({
            backgroundColor: "red",
            height: 780,
            width: 1024,
            frame: false,
            autoHideMenuBar: true
        });

        const file = "../build/index.html";
        const url = "localhost:3000";

        this._window.loadURL(IsDev ? `http://${url}` : `file://${Path.join(__dirname, file)}`);

        this._window.webContents.openDevTools();

        this._window.on("closed", () => {
            this._window = null;
        });
    }
}
