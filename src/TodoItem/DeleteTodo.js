import React from "react";
import { BsXLg } from "react-icons/bs";

const DeleteIcon = (props) => {
    const {className, onClick} = props
    return (
        <BsXLg
            className={className}
            onClick={onClick}
        />
    )
}

export {DeleteIcon}