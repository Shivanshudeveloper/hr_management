import React from 'react'
import Navigation from './static/Navigation';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { API_SERVICE, SECRET_KEY } from '../../config/URI';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import CryptoJS from 'crypto';
import NumberFormat from 'react-number-format';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { auth } from "../../Firebase/index";
import Footer from '../static/Footer';
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


const PropertyList = ({ i, property, addToFavoriteFloor }) => {
    const classes = useStyles();
    var mykey = CryptoJS.createCipher('aes-128-cbc', SECRET_KEY);
    var eE = mykey.update(property._id, 'utf8', 'hex');
    eE += mykey.final('hex');

    return (
        <>
        <tr>
              <th scope="row">{i}</th>
              <td>
                <a href={`/floor?i=${eE}`}>
                    {property.suite}
                </a>
              </td>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/floor?i=${eE}`}>
              <NumberFormat value={property.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
              </td>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/floor?i=${eE}`}>
              {property.sqft}
              </td>
              <td>
                <center>
                    <Button variant="outlined" style={{ color: 'rgb(234 61 100)', borderColor: 'rgb(234 61 100)' }} onClick={() => addToFavoriteFloor(property._id, property.suite, property.price, property.sqft)}>Add To Favorite</Button>
                </center>
              </td>
              <td>
                <center>
                    <Button variant="outlined" style={{ backgroundColor: 'rgb(234 61 100)', color: '#ffffff', borderColor: 'rgb(234 61 100)' }} onClick={() => window.location.href = `/floor?i=${eE}`}>Reserve It</Button>
                </center>
              </td>
          </tr>
        </>
    )
  }

const FloorPlan = () => {
    const [open, setOpen] = React.useState(true);
    const [allproperties, setAllproperties] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [openProperty, setOpenProperty] = React.useState(true);
    const [user, setUser] = React.useState({});
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

    React.useEffect(() => {
        axios.get(`${API_SERVICE}/api/v1/main/getallfloorplan`)
            .then(response => {
                setAllproperties(response.data);
                setLoading(false);
            })

        auth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user);
            } else {
                window.location.href = "/";
            }
            });
      }, []);
    
      

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

    const showPropertyList = () => {
        var i = 0;
        return allproperties.map(property => {
            i++;
            return <PropertyList addToFavoriteFloor={addToFavoriteFloor} i={i} property={property} key={property._id}  />
        })
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
            <Container style={{ marginTop: '5%', marginBottom: '28px' }}>
                <h2 className="text-center" style={{ marginBottom: '8px' }}>
                Prices & Floorplans
                </h2>
                <Button href="/favorites" style={{ float: 'right', margin: '4px 2px' }} startIcon={<FavoriteIcon style={{ color: 'red' }} />} >My Favorites</Button>
                {
                  loading === true ? (
                      <center style={{ marginTop: '10%' }}>
                          <CircularProgress />
                      </center>
                  ) : (
                    <table class="table table-bordered table-striped">
                      <thead>
                          <tr>
                          <th style={{ width: '8%' }} scope="col">SlNo</th>
                          <th style={{ width: '20%' }} scope="col">Suite</th>
                          <th style={{ width: '15%' }} scope="col">Price From *</th>
                          <th style={{ width: '15%' }} scope="col">SQFT *</th>
                          <th className="text-center" scope="col">Add to Favorite</th>
                          <th className="text-center" scope="col">Reserve It</th>
                          </tr>
                      </thead>
                      <tbody>
                          {showPropertyList()}
                      </tbody>
                      </table>
                  )
                }             
                <center className="mt-4 mb-4">
                    <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611208638/readestate/img_15_db2tcv.jpg" />
                </center>    
            </Container>
            <Footer />
        </>
    )
}

export default FloorPlan
