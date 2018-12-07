import * as React from "react";

import { SVGBase, ISVGState, ISVGProps } from "@core.components";
import { VectorHelpers } from "@core.utils";

export class SVG extends SVGBase<ISVGProps, ISVGState> {
    public constructor(props: ISVGProps) {
        super(props);
    }
}
