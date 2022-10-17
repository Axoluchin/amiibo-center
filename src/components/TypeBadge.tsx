import { Badge } from "@nextui-org/react";

import { amiiboTypes } from "../utils/types";

const TypeBadge = ({type}: {type: amiiboTypes}) => {

    const colorBadge = type === 'Figure' ? 'primary'
    : type === 'Card' ? 'secondary'
    : type === 'Band' ? 'success'
    : type === 'Yarn' ? 'warning'
    : 'default'

    return(
        <Badge
        color={colorBadge}
        style={{flex: 1}}
        >
            {type}
        </Badge>
    )
}

export default TypeBadge
