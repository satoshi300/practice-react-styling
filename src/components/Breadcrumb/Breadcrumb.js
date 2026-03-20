import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { Nav, List } from "./Breadcrumb.styled";

const Breadcrumb = ({ children }) => {
    return (
        <Nav>
            <List>{children}</List>
        </Nav>
    );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;