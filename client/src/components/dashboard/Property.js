import React from 'react';
import Navigation from './static/Navigation';
import Container from '@material-ui/core/Container';
import Gallery from 'react-grid-gallery';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import queryString from 'query-string';
import CryptoJS from 'crypto';
// URI
import { API_SERVICE, SECRET_KEY } from '../../config/URI';
import NumberFormat from 'react-number-format';
import Contact from '../Contact';


const Property = ({ location }) => {
    const [properties, setProperties] = React.useState({});
    const [propertyId, setpropertyId] = React.useState('');

    React.useEffect(() => {
        const { i } = queryString.parse(location.search);
        var mykey = CryptoJS.createDecipher('aes-128-cbc', SECRET_KEY);
        var idE = mykey.update(i, 'hex', 'utf8');
        idE += mykey.final('utf8');
        setpropertyId(i);
        axios.get(`${API_SERVICE}/api/v1/main/getpropertydetails/${idE}`)
            .then(response => {
                setProperties(response.data);
            })
    }, []);

    const IMAGES =
    [
        {
            src: properties.photoDownloadUrl2,
            thumbnail: properties.photoDownloadUrl2,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
        },
        {
            src: properties.photoDownloadUrl3,
            thumbnail: properties.photoDownloadUrl3,
            thumbnailWidth: 320,
            thumbnailHeight: 183,
        },
        {
            src: properties.photoDownloadUrl4,
            thumbnail: properties.photoDownloadUrl4,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
        },
        {
            src: properties.photoDownloadUrl5,
            thumbnail: properties.photoDownloadUrl5,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
        },
        {
            src: properties.photoDownloadUrl6,
            thumbnail: properties.photoDownloadUrl6,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
        },
        {
            src: properties.photoDownloadUrl7,
            thumbnail: properties.photoDownloadUrl7,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
        }
    ]

    return (
        <>
            <Navigation />
            <Container style={{ marginTop: '8%', marginBottom: '10%' }}>
                <h5>{properties.name}
                <span className="float-right">
                Reserved Charges
                <NumberFormat value={properties.amountCharged} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                </span>
                </h5> 
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <img className="shadow img img-fluid w-100 rounded" src={properties.photoDownloadUrl1} />
                    </Grid>
                    <Grid item xs={5}>
                        <Gallery images={IMAGES}/>
                    </Grid>
                </Grid>
                <br />
                <h3>About House</h3>
                <p className="text-dark">
                {properties.about}
                <br />
                <br />
                <span className="font-weight-bold h6 mt-4">
                <br />
                <ul className="list-group">
                    <li className="list-group-item">
                    <i className="fas fa-dollar-sign float-right text-secondary h5"></i>
                    Reserved Charges <NumberFormat value={properties.amountCharged} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-dollar-sign float-right text-success h5"></i>
                    Actual Price <NumberFormat value={properties.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-bed float-right h5"></i>
                    {properties.bedroom} Bed Room
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-restroom float-right h5"></i>
                    {properties.restroom} Restroom
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-cocktail float-right h5"></i>
                    {properties.kitchen} Kitchen
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-tree float-right h5"></i>
                    {properties.garden} Garden
                    </li>
                    <li className="list-group-item">
                    <i className="fas fa-map-marker-alt float-right"></i>
                    {properties.address}
                    </li>
                </ul>
                </span>
                <br />
                <center>
                    <button onClick={() => window.location.href = `/payment?i=${propertyId}`} className="btn btn-lg btn-primary w-50">
                        Reserve Property
                    </button>
                </center>
                </p>
            </Container>
            <Contact />
        </>
    )
}

export default Property
