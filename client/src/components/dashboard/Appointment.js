import React from 'react';
import Navigation from './static/Navigation';
import Container from '@material-ui/core/Container';
import { InlineWidget } from "react-calendly";
const Appointment = () => {


    return (
        <>
            <Navigation />
            <Container style={{ marginTop: '8%', marginBottom: '10%' }}>
                <center>
                    <h2 className="text-center mb-4 mt-4">
                    Schedule an Appointment
                    </h2>
                </center>
                <InlineWidget url="https://calendly.com/fileadventure/15min" />
            </Container>
        </>
    )
}

export default Appointment
