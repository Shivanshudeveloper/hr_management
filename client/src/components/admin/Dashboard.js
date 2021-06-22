import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import AddIcon from '@material-ui/icons/Add';
import queryString from 'query-string';
import { API_SERVICE } from '../../config/URI';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
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
                        <a href={`/admin/propertyinfo?id=${property._id}`}>
                        <img className="shadow img img-fluid rounded" style={{ height: '180px', width: '100%' }} src = {property.photoDownloadUrl1} alt = "product image" />
                        </a>
                    </center>
                    <Typography className={classes.pos} >
                    {property.name}
                    </Typography>
                    <center>
                    <i className="fas fa-dollar-sign text-success"></i> {property.amountCharged}
                    </center>
                    <Typography style={{ textAlign: 'center' }} variant="body2" component="p">
                        {aboutProperty}...
                    </Typography>
                </CardContent>
                <div style={{ padding: '4px' }}>
                    <Button href={`/admin/propertyinfo?id=${property._id}`} variant="outlined" fullWidth >View More</Button>
                </div>
            </Card>
        </Grid>
      </>
  )
}

export default function Dashboard({ location }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [allproperties, setAllproperties] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [transaction, setTransaction] = React.useState(false);
  const [alertmsg, setalertmsg] = React.useState('');
  const [openProperty, setOpenProperty] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  React.useEffect(() => {
    const { n } = queryString.parse(location.search);
    if (n === 's') {
      setTransaction(true);
      setalertmsg('Property Successfully Registered');
    } else if ( n === 'd' ) {
      setTransaction(true);
      setalertmsg('Property Successfully Removed');
    } else if ( n === 'df' ) {
      setTransaction(true);
      setalertmsg('Floor Successfully Removed');
    }
    axios.get(`${API_SERVICE}/api/v1/main/getallproperty`)
        .then(response => {
            setAllproperties(response.data);
            setLoading(false);
        })
  }, []);

  const showPropertyList = () => {
    return allproperties.map(property => {
        return <PropertyList property={property} key={property._id}  />
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          {
            transaction ? (
              <Collapse in={openProperty}>
                <br />
                <Alert 
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenProperty(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                severity="success">
                  <AlertTitle>Success</AlertTitle>
                  {alertmsg}
                </Alert>
                <br />
              </Collapse>
            ) : null
          }


          <Button href="/admin/new" startIcon={<AddIcon />} style={{ float: 'right', marginBottom: '4px' }} variant="outlined">
            Add a New Property
          </Button>
            {
              loading === true ? (
                  <center style={{ marginTop: '10%' }}>
                      <CircularProgress />
                  </center>
              ) : (
                <Grid container spacing={4}>
                  {showPropertyList()}
                </Grid>
              )
            }
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}