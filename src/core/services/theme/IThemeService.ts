import { ThemeType } from "@core.services";
import { BehaviorSubject } from "rxjs";
import { ITheme } from "@core.models";

export interface IThemeService {
    setTheme(name: ThemeType): void;
    toggle(): void;
    theme: BehaviorSubject<ITheme>;
}
