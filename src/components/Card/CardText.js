import React from "react";
import { Text } from "./Card.styled";

const CardText = ({ children }) => {
    return (
        <Text>{children}</Text>
    )
}

export default CardText;