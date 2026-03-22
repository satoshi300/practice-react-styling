import React from "react";
import { Image } from "./Card.styled";

const CardImg = ({ src, alt }) => {
    return (
        <Image src={src} alt={alt} />
    )
}

export default CardImg;