import React from 'react';

import { Row, Col, Tabs as RBTabs, Tab as RBTab, Form, } from 'react-bootstrap';
import { Tab, Tabs } from '../src/components/Tabs'

const Task04 = () => {
    return (
        <Row>
            <Col>
                <RBTabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <RBTab eventKey="home" title="Home">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                    </RBTab>
                    <RBTab eventKey="profile" title="Profile">
                        <p>Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.</p>
                    </RBTab>
                    <RBTab eventKey="contact" title="Contact" disabled>
                        <p>Vivamus metus nulla, fermentum eget placerat vitae, mollis interdum elit. Pellentesque arcu augue, vulputate ut porttitor ut, suscipit non orci. Integer justo odio, suscipit eget tortor nec, molestie lobortis eros. Nullam commodo elit sit amet lacus blandit aliquet. Mauris at nibh eget nisl pulvinar dignissim.</p>
                    </RBTab>
                </RBTabs>
            </Col>
            <Col>
                <Tabs defaultActiveKey='profile'>
                    <Tab eventKey='home' title="Home">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero modi quaerat perspiciatis nesciunt pariatur praesentium. Similique ullam facere quod maxime molestias a quis itaque, dolores omnis. Voluptates, itaque iure?</p>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magni quam aspernatur eius dolore quia, veniam accusamus iure sit cumque nulla officiis iste, vel rerum ipsa necessitatibus mollitia quos cupiditate?</p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        <p>This is contact content.</p>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default Task04;

