import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Stripe
import Navigation from './static/Navigation';
import Contact from '../Contact';
export default function Payment({ location }) {
    
    return (
        <React.Fragment>
        <CssBaseline />
        <Navigation />
        <Container style={{ marginTop: '8%' }} maxWidth="lg">
            <div className="alert alert-success mb-4" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                    Your Transaction is successfully completed. The details of the order has been in your reserved properties section.
                </p>
            </div>
            <br />
            <center>
                <a href="/reservedproperties" className="btn btn-primary btn-lg w-50">
                    My Reserved Properties
                </a>
            </center>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Contact />
        </React.Fragment>
    );
}