import * as React from "react";

import { ISize } from "@core.interfaces";
import { IconBase } from "@core.icons";

export class MenuIcon extends IconBase {
    protected renderIcon(): React.ReactNode {
        console.log("height", this.height);
        const gap = 2;
        const capOffset = gap * 3;
        const barHeight = this.height / 3 - capOffset;

        return (
            <g>
                <rect width="100%" height="100%" />
            </g>
        );
    }
}
