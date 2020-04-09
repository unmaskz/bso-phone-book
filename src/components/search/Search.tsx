import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../context';
import Spinner from '../spinner/Spinner';
import { Contact } from '../directory/Directory.interface';
import s from './Search.module.scss';

export default(): JSX.Element => {
    const { contacts, loaded } = useContext(AppContext);

    if (loaded) {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [query, setQuery] = useState<string>('');
        const [results, setResults] = useState<any>([]);

        const searchContacts = (name: string) => {
            setQuery(name);
            setResults([]);
            if(name.length > 2) {
                const filtered = contacts.filter((contact: any) => contact.name.includes(name));
                setIsOpen(true);
                setResults(filtered);
            }
        }

        return (
            <div className={s.search}>
                <div className={s.search__form}>
                    <input
                        className={s.search__input}
                        type='text'
                        placeholder='Search by name...'
                        value={query}
                        onChange={(e) => searchContacts(e.target.value)}
                    />
                    <FontAwesomeIcon className={s.search__icon} icon={faSearch} />
                </div>
                { isOpen && results.length > 0 && (
                    <div className={s.search__results}>
                        {results.map((result: any, i: number) => (
                            <div className={s.search__result}>
                                <Link to={`/contact/${result.id}`} className={s.search__link}>{result.name}</Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Spinner />
    )
}