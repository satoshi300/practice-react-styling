import styled, { css } from 'styled-components';

const defaultVariants = {
    primary: {
        background: '#007bff',
        color: '#fff',
    },
    secondary: {
        background: '#6c757d',
        color: '#fff',
    },
};

const defaultSize = {
    sm: {
        padding: '4px 10px',
        fontSize: '12px',
    },
    md: {
        padding: '8px 16px',
        fontSize: '14px',
    },
    lg: {
        padding: '12px 20px',
        fontSize: '16px',
    }
}

const getVariant = ({ theme, variant }) =>
    theme?.buttons?.[variant] || defaultVariants[variant] || defaultVariants.primary;

const getSize = ({ size }) =>
    defaultSize[size] || defaultSize.md;

const StyledButton = styled.button`
display: inline-block;
text-align: center;
border: none;
border-radius: 4px;
cursor: pointer;
background-color:${({ theme, variant }) =>
        getVariant({ theme, variant }).background};
    color:${({ theme, variant }) =>
        getVariant({ theme, variant }).color};        
    ${({ size }) => {
        const s = getSize({ size });
        return css`
    padding: ${s.padding};
    font-size: ${s.fontSize};
    transition: 0.2s ease;
    
    &:hover {
  opacity: 0.9;
}
    `;
    }}

    ${({ active }) =>
        active &&
        css`
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.6;
            cursor: not-allowed;
        `}
`;

export { StyledButton };