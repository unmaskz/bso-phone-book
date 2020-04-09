import React from 'react';

import { Props } from './Section.interface';
import s from './Section.module.scss';

export default(props: Props): JSX.Element => (
    <section className={s.section} {...props}>
        {props.children}
    </section>
)