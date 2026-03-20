import styled from 'styled-components';

export const TabsWrapper = styled.div`
    width: 100%;
`;

export const TabsHeader = styled.div`
    display: flex;
    gap: 8px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 16px;
`;

export const TabButton = styled.button`
    padding: 10px 16px;
    border: none;
    border-bottom: 2px solid
        ${({ active }) => (active ? '#007bff' : 'transparent')};
    background-color: transparent;
    color: ${({ active }) => (active ? '#007bff' : '#333')};
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #007bff;
    }
`;

export const TabContent = styled.div`
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
`;