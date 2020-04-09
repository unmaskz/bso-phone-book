import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Props } from './Header.interface';
import { isHome } from '../../utils';
import s from './Header.module.scss';

export default ({ title }: Props): JSX.Element => {
    const location = useLocation().pathname;

    return (
        <header className={s.header}>
            {!isHome(location) && (
                <div className={s.header__back}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </div>
            )}
            <div className={s.header__title}>{title}</div>
        </header>
    );
}