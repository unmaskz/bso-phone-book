import React, { useContext } from 'react';

import { AppContext } from '../../context';
import { Props } from './Tabs.interface';
import s from './Tabs.module.scss';

export default(props: Props): JSX.Element => {
    const tabs = ['All', 'Offices', 'Departments'];
    const { tab: currentTab, setTab } = useContext(AppContext);

    return (
        <div className={s.tabs}>
            {tabs.map((tab, i): JSX.Element => (
                <div
                    className={`${s.tabs__tab} ${currentTab === tab ? s.tabs__tab___current : ''}`}
                    onClick={() => setTab(tab)}
                    key={`tab-${tab}-${i}`}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};