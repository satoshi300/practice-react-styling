import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'green',
        secondary: 'blue',
    }
}

const Task01 = () => {

    return (

        <ThemeProvider theme={theme}>
            <Row>
                <Col>
                    <RBAlert variant="primary">
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </RBAlert>
                </Col>
                <Col>
                    <Alert type='secondary'>
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </Alert>
                </Col>
            </Row>
        </ThemeProvider>
    )
}

export default Task01;

