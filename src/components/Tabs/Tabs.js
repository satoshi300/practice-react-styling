import React, { useState } from 'react';
import {
    TabsWrapper,
    TabsHeader,
    TabButton,
    TabContent,
} from './Tabs.styled';

const Tabs = ({ children, defaultActiveKey }) => {
    const tabsArray = React.Children.toArray(children);

    const initialKey =
        defaultActiveKey || tabsArray.find(tab => !tab.props.disabled)?.props.eventKey;

    const [activeKey, setActiveKey] = useState(initialKey);

    const activeTab =
        tabsArray.find(tab => tab.props.eventKey === activeKey) || tabsArray[0];

    const handleSelect = (eventKey, disabled) => {
        if (disabled) return;
        setActiveKey(eventKey);
    };

    return (
        <TabsWrapper>
            <TabsHeader>
                {tabsArray.map((tab) => (
                    <TabButton
                        key={tab.props.eventKey}
                        type="button"
                        active={tab.props.eventKey === activeKey}
                        disabled={tab.props.disabled}
                        onClick={() =>
                            handleSelect(tab.props.eventKey, tab.props.disabled)
                        }
                    >
                        {tab.props.title}
                    </TabButton>
                ))}
            </TabsHeader>

            <TabContent>
                {activeTab}
            </TabContent>
        </TabsWrapper>
    );
};

export default Tabs;