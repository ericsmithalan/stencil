import * as isDev from "electron-is-dev";
import * as path from "path";

import { BrowserWindow, remote, app } from "electron";

export interface ClientPropTypes {
    backgroundColor: string;
    width: number;
    height: number;
    port: number;
    host: string;
    outDir: string;
}

export class Client {
    private readonly _props: ClientPropTypes;
    public static defaultProps: Partial<ClientPropTypes> = {
        backgroundColor: "red",
        height: 780,
        width: 1024,
        port: 3000,
        host: "localhost",
        outDir: "../build"
    };

    private _window: Electron.BrowserWindow | null;

    public constructor(props?: ClientPropTypes) {
        this._props = Object.assign(Client.defaultProps, props || {}) as ClientPropTypes;
    }

    public get window(): Electron.BrowserWindow | null {
        return remote.getCurrentWindow();
    }

    public start() {
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
    }

    private _createWindow(): void {
        this._window = new BrowserWindow({
            height: this._props.height,
            width: this._props.width,
            backgroundColor: this._props.backgroundColor,
            frame: false,
            autoHideMenuBar: true
        });

        const file = `${this._props.outDir}/index.html`;
        const url = `${this._props.host}:${this._props.port}`;

        this._window.loadURL(isDev ? `http://${url}` : `file://${path.join(__dirname, file)}`);

        this._window.webContents.openDevTools();

        this._window.on("closed", () => {
            this._window = null;
        });
    }
}
