import React from "react";
import { WrapperBody } from "./Card.styled";

const CardBody = ({ children }) => {
    return (
        <WrapperBody>{children}</WrapperBody>
    )
}

export default CardBody;