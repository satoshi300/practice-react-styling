import React from 'react';

import Button from './../src/components/Button';
import { ThemeProvider } from 'styled-components';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const theme = {
    buttons: {
        primary: {
            background: '#007bff',
            color: 'white',
        },
        secondary: {
            background: 'green',
            color: 'white',
        },
    },
};


const Task02 = () => {
    return (<>
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
                <ThemeProvider theme={theme}>

                    <Button variant="primary">Primary</Button>

                    {/* <Button variant="secondary">Secondary</Button> */}

                    {/* <Button size="sm">Small</Button> */}

                    {/* <Button size="lg">Large</Button> */}

                    {/* <Button active>Active</Button> */}

                    {/* <Button disabled>Disabled</Button> */}
                </ThemeProvider>
            </Col>
        </Row>
    </>
    )
}

export default Task02;

