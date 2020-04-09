import React from 'react';

import Tabs from '../tabs/Tabs';
import Directory from '../directory/Directory';
import Search from '../search/Search';
import s from './Dashboard.module.scss';

export default (): JSX.Element => (
  <div className={s.dashboard}>
    <Search />
    <Tabs />
    <Directory />
  </div>
);