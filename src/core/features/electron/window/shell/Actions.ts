export namespace ShellActions {
    export const SHELL_UPDATE_TITLE = "SHELL_UPDATE_TITLE";
    export type SHELL_UPDATE_TITLE = typeof SHELL_UPDATE_TITLE;

    export type UpdateTitle = {
        type: SHELL_UPDATE_TITLE;
        value: string;
    };

    export const updateTitle = (value: string): UpdateTitle => ({
        type: SHELL_UPDATE_TITLE,
        value
    });
}
