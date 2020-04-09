import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import { AppContext } from '../../context';
import Spinner from '../spinner/Spinner';
import { Contact } from './Directory.interface';
import { groupByLetter, groupByLocation, groupByDepartment } from '../../utils';
import s from './Directory.module.scss';

export default(): JSX.Element => {
    const { contacts, loaded, tab} = useContext(AppContext);

    if (loaded) {
        const getDirectoryList = () => {
            switch (tab) {
                case 'All': return groupByLetter(contacts);
                case 'Departments': return groupByDepartment(contacts);
                case 'Offices': return groupByLocation(contacts);
                default: return contacts;
            }
        }
        const getFileName = (name: string) => slugify(name).toLowerCase();

        return (
            <div className={s.directory}>
                {Object.entries(getDirectoryList()).map(([key, value]) => (
                    <div className={s.directory__section} key={`letter-${key}`}>
                        <div className={s.directory__heading}>{key}</div>
                        <div className={s.directory__contacts}>
                            {Object.values(value).map((contact: Contact) => (
                                <Link
                                    to={`/contact/${contact.id}`}
                                    className={s.directory__contact}
                                    key={`letter-${key}-contact-${contact.id}`}
                                >
                                    <div className={s.directory__avatar}>
                                        <img
                                            className={s.directory__avatarImage}
                                            src={`https://s3-eu-west-1.amazonaws.com/bso.media.cdn/generic/staff-images/${getFileName(contact.name)}--bw.png`}
                                            alt={`Avatar of ${contact.name}`}
                                        />
                                    </div>
                                    <div className={s.directory__content}>
                                        <h4 className={s.directory__contactName}>{contact.name}</h4>
                                        <p className={s.directory__contactJobTitle}>{contact.jobTitle}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Spinner />
    )
}