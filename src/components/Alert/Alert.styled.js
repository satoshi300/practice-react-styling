import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: 12px;
    /* margin: 10px 0; */
    border-radius: 4px;
        background-color: ${({ theme, type }) =>
        theme?.colors?.[type]?.background};
            color: ${({ theme, type }) =>
        theme?.colors?.[type]?.color};
`;

export { StyledAlert };