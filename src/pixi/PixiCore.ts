import * as PIXI from "pixi.js";

export class PixiCore {
	private readonly _app: PIXI.Application;
	private readonly _renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
	private readonly _world: PIXI.Container;
	private _width: number;
	private _height: number;

	public constructor() {
		this._app = new PIXI.Application();
		this._renderer = PIXI.autoDetectRenderer();
		this._world = new PIXI.Container();
	}

	public create(element: HTMLElement, width: number, height: number): void {
		this._app.view.width = width;
		this._app.view.height = height;

		this._app.view.style.backgroundColor = "red";

		element.appendChild(this._app.view);

		this.update();
	}

	public get renderer(): PIXI.CanvasRenderer | PIXI.WebGLRenderer {
		return this._renderer;
	}

	public get world(): PIXI.Container {
		return this._world;
	}

	public get height(): number {
		return this._height;
	}

	public set height(value: number) {
		this._height = value;
	}

	public get width(): number {
		return this._width;
	}

	public set width(value: number) {
		this._width = value;
	}

	public update(): void {
		requestAnimationFrame(this.update);
		this._renderer.render(this._world);
	}
}
