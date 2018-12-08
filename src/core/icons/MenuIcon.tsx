import * as React from "react";

import { ISize } from "@core.interfaces";
import { IconBase } from "@core.icons";

export class MenuIcon extends IconBase {
    protected iconRendering(): React.ReactNode {
        return (
            <g>
                <rect width="100%" height="100%" />
            </g>
        );
    }
}
