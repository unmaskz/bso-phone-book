import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import s from './Spinner.module.scss';

export default(): JSX.Element => (
    <div className={s.spinner}>
        <FontAwesomeIcon icon={faSpinner} size="3x" spin color="#00b1e3" />
    </div>
);