import React from 'react'; 

import Header from '../components/header/Header';
import Section from '../components/section/Section';
import { Props } from './index.interface';
import s from './index.module.scss';

export default({ children }: Props): JSX.Element => (
    <div className={s.app}>
        <Header title="Phone Book" />
        <Section>
            {children}
        </Section>
    </div>
)