import React from 'react'
import Navigation from './static/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { API_SERVICE, SECRET_KEY } from '../../config/URI';
import axios from 'axios';
import CryptoJS from 'crypto';
import NumberFormat from 'react-number-format';
import CircularProgress from '@material-ui/core/CircularProgress';
import { auth } from '../../Firebase/index';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Contact from '../Contact';

const useStyles = makeStyles((theme) => ({
    pos: {
        marginBottom: 12,
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3vh'
    },
    cardroot: {
        minWidth: 230,
    },
}));

const PropertyList = ({ property }) => {
    const classes = useStyles();
    var price = property.properties.price;
    var charges = (5/100) * Number(price);
    charges = charges.toFixed(0);
    return (
        <>
          <ul className="list-group font-weight-bold mb-2">
            <li className="list-group-item">
            <i className="fas fa-dollar-sign float-right text-secondary h5"></i>
            Reserved Charges <NumberFormat value={charges} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
            </li>
            <li className="list-group-item">
            <i className="fas fa-dollar-sign float-right text-success h5"></i>
            Actual Price <NumberFormat value={property.properties.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
            </li>
            <li className="list-group-item">
            <i className="fas fa-bed float-right h5"></i>
            {property.properties.suite} Suite*
            </li>
            <li className="list-group-item">
            <i className="fas fa-bed float-right h5"></i>
            {property.properties.beds} Bed Room*
            </li>
            <li className="list-group-item">
            <i class="fas fa-balance-scale-right float-right h5"></i>
            {property.properties.sqft} Sq. Ft.
            </li>
            <li className="list-group-item">
            <i class="fas fa-shower float-right h5"></i>
            {property.properties.baths} Bahts*
            </li>
            <li className="list-group-item">
            <i class="fas fa-street-view float-right h5"></i>
            {property.properties.view} View*
            </li>
            <li className="list-group-item">
            <i className="fas fa-id-card-alt float-right"></i>
            Transaction ID <br />
            {property.transactionId}
            </li>
            <li style={{ color: 'white', backgroundColor: 'green' }} className="list-group-item">
            <i style={{ fontSize: '4vh' }} className="fas fa-check-circle float-right"></i>
            Successfully Reserved
            </li>
        </ul>
        </>
    )
}


const ReservedProperties = () => {
    // Adding Favorite Floor Plans
    const [allproperties, setAllproperties] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    
    
    React.useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                axios.get(`${API_SERVICE}/api/v1/main/getallreservedproperty/${user.email}`)
                    .then(response => {
                        setAllproperties(response.data);
                        setLoading(false);
                    })
            } else {
                window.location.href = "/";
            }
        });
    }, []);
    
    const showPropertyList = () => {
        return allproperties.map(property => {
            return <PropertyList property={property} key={property._id}  />
        })
    }
    
    return (
        <>
            <Navigation />
            <h2 className="text-center" style={{ marginTop: '5%' }}>
            Reserved Properties
            </h2>
            <Container style={{ marginTop: '4%' }}>
            <Button size="large" href="/favorites" style={{ float: 'right', margin: '4px 2px' }} startIcon={<FavoriteIcon style={{ color: 'red' }} />} >My Favorites Floor Plans</Button>
            <br />
            <br />
            <br />
                {
                    loading === true ? (
                        <center style={{ marginTop: '10%' }}>
                            <CircularProgress />
                        </center>
                    ) : (
                        <>
                        {showPropertyList()}
                        </>
                    )
                }
               
                

                
            </Container>
            <Contact />
        </>
    )
}

export default ReservedProperties
