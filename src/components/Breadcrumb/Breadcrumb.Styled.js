import styled, { css } from "styled-components";

export const Nav = styled.nav`
background-color: #e9ecef;    
width: 100%; 
border-radius: 4px;
`;

export const List = styled.ol`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding:12px;
   
`;

export const Item = styled.li`
    display: flex;
    /* background-color: #fff; */
    align-items: center;
    font-size: 16px;
    color: ${({ $active }) => ($active ? "#6c757d" : "#007bff")};

    &:not(:first-child)::before {
        content: "/";
        margin: 0 8px;
        color: #999;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    ${({ $active }) =>
        $active &&
        css`
            font-weight: 600;

            a {
                pointer-events: none;
            }
        `}
`;