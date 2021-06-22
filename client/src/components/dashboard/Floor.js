import React from 'react';
import Navigation from './static/Navigation';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import queryString from 'query-string';
import CryptoJS from 'crypto';
// URI
import { API_SERVICE, SECRET_KEY } from '../../config/URI';
import NumberFormat from 'react-number-format';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InlineWidget } from "react-calendly";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Contact from '../Contact';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { auth } from "../../Firebase/index";

const Floor = ({ location }) => {
    const [properties, setProperties] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const [openTerms, setOpenTerms] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [propertyId, setpropertyId] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenTerms = () => {
        setOpenTerms(true);
      };
      const handleCloseTerms = () => {
        setOpenTerms(false);
      };
    
    React.useEffect(() => {
        const { i } = queryString.parse(location.search);
        var mykey = CryptoJS.createDecipher('aes-128-cbc', SECRET_KEY);
        var idE = mykey.update(i, 'hex', 'utf8');
        idE += mykey.final('utf8');
        setpropertyId(i);
        axios.get(`${API_SERVICE}/api/v1/main/getfloordetails/${idE}`)
            .then(response => {
                setProperties(response.data);
            })

        auth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user);
            } else {
                window.location.href = "/";
            }
            });
    }, []);

    const [openMessage, setOpenMessage] = React.useState(false);
    const handleClickMessage = () => {
        setOpenMessage(true);
    };
    const handleCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenMessage(false);
    };

    const addToFavoriteFloor = (floorId, suite, price, sqft) => {
        var uploadData = {
            floorId,
            userId: user.uid,
            suite,
            price,
            sqft
        }
        axios.post(`${API_SERVICE}/api/v1/main/addtofavoritefloor`, uploadData)
        .then((response) => {
            
        }).catch(err => console.log(err));
        setTimeout(function(){ 
            handleClickMessage();
        }, 1000);
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openMessage}
                autoHideDuration={2000}
                onClose={handleCloseMessage}
                message="Added to Favorites"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseMessage}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
            <Navigation />
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Appointment</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <InlineWidget url="https://calendly.com/laroyalcondos/support" />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openTerms}
                fullWidth={true}
                maxWidth="md"
                onClose={handleCloseTerms}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Terms & Conditions</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <h4 style={{ fontFamily: 'auto' }} className="text-center">Please Scroll to Bottom</h4>
                    <h5 style={{ fontFamily: 'auto' }}>
                        Initial Disclaimer: <br />
                        You will have 20 minutes to complete the transaction. Should you not complete the reservation process within this time, the property will no longer be reserved. Laroyalcondos (the “Vendor”) is not responsible for any network issues which may cause the system to time out.
                        ALL OFFERS REMAIN SUBJECT TO ACCEPTANCE BY THE VENDOR.
                        An offer will not be fully submitted until you input contact information of all purchasers, pay an administration fee via credit card.
                        NOTE: We require full names as they appear on the purchasers’ government-issued identification. Please take care in entering the correct information.
                        By submitting an offer, on acceptance by the Vendor you agree to purchase the property you have selected on the terms contained in the Agreement of Purchase and Sale.* No changes will be permitted.
                        There is a $500 administration fee that is payable to. This fee is not applied to any deposit. This fee is non-refundable, including where the reservation does not result in the purchase of the property for any reason.
                        The purchase price for the property will not be secured until the reserve button is selected and the terms and conditions are accepted. Until such time, prices are subject to change without notice
                        The selected property may not be available at all times and vendor will try offer equivalent property in the case of reserved property not being available anymore
                        Once you reserve a property you are providing a legal commitment to pay the rest of the amount as per vendor provided schedule and failure to do so will result in the loss of reservation as well as amount paid till date towards the reserved property.
                    </h5>
                    <br />
                    <center>
                    <a href={`/paymentf?i=${propertyId}`} className="btn btn-primary btn-lg btn-block">
                        I Accept Terms & Conditions
                    </a>
                    </center>
                    <br />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseTerms} color="primary" autoFocus>
                    Close
                </Button>
                </DialogActions>
            </Dialog>


            <Container style={{ marginTop: '8%', marginBottom: '10%' }}>
                
                <center>
                    <h2 className="text-center mb-4 mt-4">
                    Prices & Floorplans
                    </h2>
                    <h3>
                        {properties.suite}
                    </h3>
                    <center>
                    <button style={{backgroundColor: 'rgb(234 61 100)', color: '#ffffff', borderColor: 'rgb(234 61 100)'}} onClick={handleClickOpenTerms} className="btn btn-lg w-50">
                        Reserve Property
                    </button>
                </center>
                </center>
                <ul className="list-group text-dark h5 font-weight-bold mt-2 mb-4">
                    <li className="list-group-item">
                    <i className="fas fa-dollar-sign float-right text-success h5"></i>
                    <NumberFormat value={properties.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-bed float-right h5"></i>
                    {properties.beds} Bed Room*
                    </li>
                    <li className="list-group-item">
                    <i class="fas fa-balance-scale-right float-right h5"></i>
                    {properties.sqft} Sq. Ft.
                    </li>
                    <li className="list-group-item">
                    <i class="fas fa-shower float-right h5"></i>
                    {properties.baths} Bahts*
                    </li>
                    <li className="list-group-item">
                    <i class="fas fa-money-bill float-right h5"></i>
                    <NumberFormat value={properties.propertytax} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value} Property Tax*</div>} />
                    </li>
                    <li className="list-group-item">
                    <i class="fas fa-street-view float-right h5"></i>
                    {properties.view} View*
                    </li>
                </ul>
                <center className="mt-4 mb-4">
                    <Button
                        size="large"
                        onClick={() => addToFavoriteFloor(properties._id, properties.suite, properties.price, properties.sqft)}
                        variant="contained"
                        style={{ marginRight: '4px', backgroundColor: '#fff' }}
                        startIcon={<FavoriteIcon style={{ color: 'red' }} />}
                        >
                        Add to Favorite
                    </Button>
                    <Button
                        size="large"
                        onClick={handleClickOpen}
                        variant="contained" color="secondary"
                        startIcon={<CalendarTodayIcon />}
                        >
                        Schedule an Appointment
                    </Button>
                </center>
                <center>
                    <img width="100%" height="auto" src={properties.photo} />
                </center>
            </Container>
            <Contact />
        </>
    )
}

export default Floor
