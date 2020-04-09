import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faHashtag, faMapMarker, faPhone } from '@fortawesome/pro-regular-svg-icons';

import { AppContext } from '../../context';
import Spinner from '../spinner/Spinner';
import { getById } from '../../utils';
import { Contact } from '../directory/Directory.interface';
import s from './Contact.module.scss';

export default(): JSX.Element => {
    const { id } = useParams();
    const { contacts, loaded } = useContext(AppContext);

    if (loaded) {
        const getFileName = (name: string) => slugify(name).toLowerCase();
        const contact: Contact = getById(contacts, id);

        return (
            <div className={s.contact}>
                <div className={s.contact__header}>
                    <div className={s.contact__avatar}>
                        <img
                            className={s.contact__avatarImage}
                            src={`https://s3-eu-west-1.amazonaws.com/bso.media.cdn/generic/staff-images/${getFileName(contact.name)}--bw.png`}
                            alt={`Avatar of ${contact.name}`}
                        />
                    </div>
                    <h3 className={s.contact__name}>{contact.name}</h3>
                    <p className={s.contact__jobTitle}>{contact.jobTitle}</p>
                </div>
                <div className={s.contact__content}>
                    <div className={s.contact__item}>
                        <div className={s.contact__itemIcon}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>    
                        <div className={s.contact__itemText}>
                            {contact.department}
                        </div>
                    </div>
                    <div className={s.contact__item}>
                        <div className={s.contact__itemIcon}>
                            <FontAwesomeIcon icon={faMapMarker} />
                        </div>
                        <div className={s.contact__itemText}>
                            {contact.location}
                        </div>
                    </div>
                    <div className={s.contact__item}>
                        <div className={s.contact__itemIcon}>
                            <FontAwesomeIcon icon={faHashtag} />
                        </div>
                        <div className={s.contact__itemText}>
                            {contact.extension}
                        </div>
                    </div>
                    <div className={s.contact__item}>
                        <div className={s.contact__itemIcon}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className={s.contact__itemText}>
                            {contact.DDI}
                        </div>
                    </div>
                    <div className={s.contact__item}>
                        <div className={s.contact__itemIcon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className={s.contact__itemText}>
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </div>
                    </div>               
                </div>
            </div>
        );
    }

    return (
        <Spinner />
    )
}
