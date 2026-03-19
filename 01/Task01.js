import React from 'react';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: {
            background: '#d1ecf1',
            color: '#0c5460',
        },
        secondary: {
            background: '#f8d7da',
            color: '#721c24',
        },
    },
};

const Task01 = () => {

    return (

        <ThemeProvider theme={theme}>
            <Row>
                <Col>
                    <RBAlert variant="primary">
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </RBAlert>
                    {/* <RBAlert variant="secondary">
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </RBAlert> */}
                </Col>
                <Col>
                    <Alert type='primary'>
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </Alert>
                    {/* <Alert type='secondary'>
                        Uwaga! <em>Styled Components</em> nadchodzi!
                    </Alert> */}
                </Col>

            </Row>
        </ThemeProvider>
    )
}

export default Task01;

