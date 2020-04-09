import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import posed, { PoseGroup } from 'react-pose';

import Layout from '../../layouts';
import { AppContext } from '../../context';
import Dashboard from '../dashboard/Dashboard';
import Contact from '../contact/Contact';
import data from '../../assets/telephone-directory.csv';

export default(): JSX.Element => {
    const [contacts, setContacts] = useState<any>();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [tab, setTab] = useState<string>('All');

    const RouteContainer = posed.div({
        enter: {
            x: 0,
            opacity: 1,
            delay: 300,
            transition: {
                x: { type: 'spring', stiffness: 1000, damping: 15 },
                default: { duration: 300 }
            }
        },
        exit: {
            x: -50,
            opacity: 0,

            transition: {
                x: ({ from, to }: any) => (
                    { type: 'keyframes', values: [from, 50, to], times: [0, 0.99, 1] }),
                opacity: ({ from, to }: any) => (
                    { type: 'keyframes', values: [from, 0, to], times: [0, 0.99, 1] })
            }
        }
    });

    useEffect(() => {
        d3.csv(data).then(function (data) {
            setContacts(data.sort());
            setLoaded(true);
        }).catch(function (err) {
            setLoaded(false);
            throw err;
        })
    }, []);

    return (
        <AppContext.Provider value={{
            contacts,
            setContacts,
            loaded,
            setLoaded,
            tab,
            setTab,
        }}>
            <Router>
                <Layout>
                    <Route render={({ location }) => (
                        <PoseGroup>
                            <RouteContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path="/contact/:id" component={Contact} />
                                    <Route exact path="/" component={Dashboard} />
                                </Switch>
                            </RouteContainer>
                        </PoseGroup>
                    )} />
                </Layout>
            </Router>
        </AppContext.Provider>
    );
}