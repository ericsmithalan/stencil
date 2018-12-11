import { IThemeState } from "@stencil.features/theme";
import { IComponentProps } from "@stencil.components/index";
import { IShellState } from "@stencil.features/electron";

export interface IShellProps extends IComponentProps {
    titlebarHeight: number;
    shell: IShellState;
    theme: IThemeState;
}
