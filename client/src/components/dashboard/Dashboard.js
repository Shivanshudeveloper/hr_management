import React from 'react'
import Navigation from './static/Navigation2';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { API_SERVICE, SECRET_KEY } from '../../config/URI';
import axios from 'axios';
import Contact from '../Contact';
import CryptoJS from 'crypto';
import NumberFormat from 'react-number-format';
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


const PropertyList = ({ property }) => {
    const classes = useStyles();
    var mykey = CryptoJS.createCipher('aes-128-cbc', SECRET_KEY);
    var eE = mykey.update(property._id, 'utf8', 'hex');
    eE += mykey.final('hex');
  
    var aboutProperty = `${property.about}`;
    if (property.about !== '') {
      aboutProperty = aboutProperty.substring(0, 10);
    }
    return (
        <>
          <Grid item xs={3}>
              <Card className={classes.cardroot} variant="outlined">
                  <CardContent>
                      <center>
                          <a href={`/property?i=${eE}`}>
                          <img className="shadow img img-fluid rounded" style={{ height: '180px', width: '100%' }} src = {property.photoDownloadUrl1} alt = "product image" />
                          </a>
                      </center>
                      <Typography className={classes.pos} >
                      {property.name}
                      </Typography>
                      <center>
                      {`(${property.category})`}
                      </center>
                      <center>
                      <NumberFormat value={property.amountCharged} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                      </center>
                      <Typography style={{ textAlign: 'center' }} variant="body2" component="p">
                          {aboutProperty}...
                      </Typography>
                  </CardContent>
                  <div style={{ padding: '4px' }}>
                      <Button href={`/property?i=${eE}`} variant="outlined" fullWidth >View More</Button>
                  </div>
              </Card>
          </Grid>
        </>
    )
}

const Dashboard = () => {
    const [allproperties, setAllproperties] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [filterName, setFilterName] = React.useState('All Properties');

    React.useEffect(() => {
    axios.get(`${API_SERVICE}/api/v1/main/getallproperty`)
        .then(response => {
            setAllproperties(response.data);
            setLoading(false);
        })
    }, []);

    const houseFilter = ( type ) => {
        setLoading(true);
        axios.get(`${API_SERVICE}/api/v1/main/getproperty/${type}`)
        .then(response => {
            setAllproperties(response.data);
            setLoading(false);
        })
        if ( type === "detached" ) {
            setFilterName('Detached House');
        } else if ( type === "condominium" ) {
            setFilterName('Condominium');
        } else if ( type === "town" ) {
            setFilterName('Town House');
        } else {
            setFilterName('All Properties');
        }
    }

    const showPropertyList = () => {
    return allproperties.map(property => {
        return <PropertyList property={property} key={property._id}  />
    })
    }

    const primaryOptions = {
        type      : 'loop',
        height     : 350,
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        autoplay     : true,
        pagination: false,
    };

    return (
        <>
            <Navigation />
            {/* <div style={{ marginTop: '5%' }} className="cta-trial text-center">
                <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611766500/readestate/logo_yb2cqa.png" />
                <h3>{filterName}</h3>
            </div> */}
            {/* <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611681960/readestate/RC13_a02_bxtuqt.jpg" /> */}
            {/* <Container style={{ marginTop: '4%', marginBottom: '4%' }}>
                
                <Grid style={{ marginTop: '8px' }} container spacing={3}>
                {
                    loading === true ? (
                        <center style={{ marginTop: '10%', marginLeft: '50%' }}>
                            <CircularProgress />
                        </center>
                    ) : (
                        <Grid container spacing={4}>
                        {showPropertyList()}
                        </Grid>
                    )
                }
                </Grid>
            </Container> */}
            <section className="call-action section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="cta-trial text-center">
                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611766500/readestate/logo_yb2cqa.png" />
                    <h3>Welcomes You!</h3>
                    <p>The best ever house and interior designs you ever seen</p>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207452/readestate/img_10_yclyya.jpg" />
                        </div>
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207558/readestate/img_11_y02scd.jpg" />
                        </div>
                    </div>

                    <div className="row mt-4 mb-4">
                        <div className="col-md">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207713/readestate/img_14_zv5ydu.jpg" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207602/readestate/img_13_kz6seo.jpg" />
                        </div>
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207644/readestate/img_12_yzptnl.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <Contact />
            <Footer />
        </>
    )
}

export default Dashboard
