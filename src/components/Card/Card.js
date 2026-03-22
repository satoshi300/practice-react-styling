import React from "react";

import { WrapperCard } from "./Card.styled";

const Card = ({ children }) => {
    return (
        <WrapperCard>{children}</WrapperCard>
    );
};


export default Card;
