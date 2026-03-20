import React from "react";
import { Item } from "./Breadcrumb.styled";

const BreadcrumbItem = ({ children, href, active }) => {
    return (
        <Item $active={active}>
            {active ? children : <a href={href}>{children}</a>}
        </Item>
    );
};

export default BreadcrumbItem;