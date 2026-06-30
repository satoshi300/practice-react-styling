import styled from 'styled-components';

export const TabsWrapper = styled.div`
    width: 100%;
`;

export const TabsHeader = styled.div`
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #dee2e6;
`;

export const TabButton = styled.button`
    padding: 8px 16px;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: transparent;
    color: ${({ disabled, active }) => {
        if (disabled) return '#6c757d';
        if (active) return '#495057';
        return '#0d6efd';
    }};

    border-color: ${({ active }) =>
        active ? '#dee2e6 #dee2e6 #fff' : 'transparent'};

     &:hover {
        border-color: ${({ disabled, active }) => {
        if (disabled) return 'transparent';
        if (active) return '#dee2e6 #dee2e6 #fff';
        return '#e9ecef #e9ecef #dee2e6';
    }};
        color: ${({ disabled, active }) => {
        if (disabled) return '#6c757d';
        if (active) return '#495057';
        return '#0a58ca';
    }};
    }

    &:focus {
        outline: none;
    }
`;

export const TabContent = styled.div`
    /* border: 1px solid #dee2e6; */
    border-top: none;
    padding: 16px;
    background-color: #fff;
`;