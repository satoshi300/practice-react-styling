import styled from 'styled-components';

// const StyledAlert = styled.div`
//    
//     background-color: ${props => props.type === 'primary' ? '#c5aeb4' : '#fce2c2'
//     }
// `

const StyledAlert = styled.div`
    display: block;
    padding: 16px;
    border-radius: 4px;
    margin: 10px 0;
    background-color: ${props => props.theme?.colors?.[props.type]};
`;

export { StyledAlert };