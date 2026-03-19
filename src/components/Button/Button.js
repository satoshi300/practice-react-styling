import React from 'react';

import { StyledButton } from './Button.styled';

const Button = props => {
    const { variant = 'primary', size = 'md', active = false, disabled = false } = props;
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled}>{props.children}</StyledButton>
    );
}

export default Button;