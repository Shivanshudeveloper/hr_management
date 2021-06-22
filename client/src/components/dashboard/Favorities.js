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
import FavoriteIcon from '@material-ui/icons/Favorite';
import { auth } from "../../Firebase/index";
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


const PropertyList = ({ i, property }) => {
    const classes = useStyles();
    var mykey = CryptoJS.createCipher('aes-128-cbc', SECRET_KEY);
    var eE = mykey.update(property.floorId, 'utf8', 'hex');
    eE += mykey.final('hex');

    return (
        <>
        <tr>
              <th scope="row">{i}</th>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/floor?i=${eE}`}>
                  {property.suite}
              </td>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/floor?i=${eE}`}>
              <NumberFormat value={property.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
              </td>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/floor?i=${eE}`}>
              {property.sqft}
              </td>
          </tr>
        </>
    )
  }

const Favorities = () => {
    const [open, setOpen] = React.useState(true);
    const [allproperties, setAllproperties] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [openProperty, setOpenProperty] = React.useState(true);
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user);
                axios.get(`${API_SERVICE}/api/v1/main/getallfloorfavorite/${user.uid}`)
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
        var i = 0;
        return allproperties.map(property => {
            i++;
            return <PropertyList i={i} property={property} key={property._id}  />
        })
    }
    return (
        <>
            <Navigation />
            <Container style={{ marginTop: '5%', marginBottom: '28px' }}>
                <h2 className="text-center" style={{ marginBottom: '8px' }}>
                <i style={{ fontSize: '34px' }} className="fas fa-heart text-danger mr-2"></i> Prices & Floorplans
                </h2>
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
                          <th style={{ width: '25%' }} scope="col">Suite</th>
                          <th style={{ width: '25%' }} scope="col">Price From *</th>
                          <th style={{ width: '25%' }} scope="col">SQFT *</th>
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
            <Contact />
        </>
    )
}

export default Favorities
