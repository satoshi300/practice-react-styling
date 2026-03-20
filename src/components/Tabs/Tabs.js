import React, { useState } from 'react';
import {
    TabsWrapper,
    TabsHeader,
    TabButton,
    TabContent,
} from './Tabs.styled';

const Tabs = ({ children }) => {
    const tabsArray = React.Children.toArray(children);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <TabsWrapper>
            <TabsHeader>
                {tabsArray.map((child, index) => (
                    <TabButton
                        key={index}
                        active={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        {child.props.title}
                    </TabButton>
                ))}
            </TabsHeader>

            <TabContent>
                {tabsArray[activeIndex]}
            </TabContent>
        </TabsWrapper>
    );
};

export default Tabs;