import { CSSProperties } from "react";
import { Badge } from "@nextui-org/react";

import { amiiboTypes } from "../utils/types";

const TypeBadge = ({type, style}: {type: amiiboTypes, style?: CSSProperties}) => {

    const colorBadge = type === 'Figure' ? 'primary'
    : type === 'Card' ? 'secondary'
    : type === 'Band' ? 'success'
    : type === 'Yarn' ? 'warning'
    : 'default'

    return(
        <Badge
        color={colorBadge}
        style={{flex: 1, ...style}}
        >
            {type}
        </Badge>
    )
}

export default TypeBadge
