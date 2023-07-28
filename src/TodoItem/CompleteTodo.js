import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

const CompleteIcon = (props) => {
    const {completed, onClick} = props;
    const iconSelected = completed ? <BsCheckCircleFill /> : <BsCheckCircle />;

    return (
        <span
        className={completed ? 'icon icon-check--active' : 'icon icon-check--unactive'}
        onClick={onClick}
        >
            {iconSelected}
        </span>
    )
}

// const CompleteIcon = (props) => {
//     const {className, onClick} = props
//     return (
//         <BsCheckCircleFill
//             className={className}
//             onClick={onClick}
//         />
//     )
// }

export {CompleteIcon}