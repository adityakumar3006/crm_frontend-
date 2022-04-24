import React from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import { Defaultlayout } from '../../layout/Defaultlayout';
export const Privateroute = ({ children, ...rest }) => {
    const isAuth = true
    return (
        <Route
            {...rest}
            render={() =>
                isAuth ?
                    <Defaultlayout>{children}</Defaultlayout> : <Redirect to="/" />}
        />

    );
};