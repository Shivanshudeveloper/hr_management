import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import { API_SERVICE } from '../config/URI';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: '4px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: '2em auto 1em',
  },
});

function HomePage({ amount }) {
  const classes = useStyles();
  // State
  const [email, setEmail] = useState('shivanshu@gmail.com');
  const [user, setUser] = useState({});
  const [paysubmit, setPaySubmit] = useState(false);

  const [fullName, setfullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('+1 ');


  const stripe = useStripe();
  const elements = useElements();

// https://join.skype.com/invite/D6dgx2KDLDwh


  const handleSubmit = async (event) => {
    setPaySubmit(true);
    // var e = sessionStorage.getItem("email");
    var e = "shivanshu981@gmail.com"
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post(`http://localhost:5000/api/v1/main/charges`, {email: email, amount: amount});

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: e,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log(result);
        window.location.href = `/thankyou`;
        // var uploadData = {
        //   transactionId: result.paymentIntent.id,
        //   email,
        //   fullName,
        //   address,
        //   phone,
        //   properties
        // }
        // axios.post(`${API_SERVICE}/api/v1/main/paymentsuccessfull`, uploadData)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             window.location.href = `/thankyou`;
        //         } 
        //     }).catch(err => console.log(err));

        // setTimeout(function(){ 
        //     window.location.href = `/thankyou`;
        // }, 2000);

        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card className={classes.root}>
          <h2 className="text-center font-weight-bold">
          Please Pay to Continue
          </h2>
        <CardContent className={classes.content}>
          <input 
              className="form-control"
              label='Full Name'
              id='outlined-email-input'
              helperText={`Full Name`}
              margin='normal'
              type='text'
              placeholder="Full Name"
              required
              fullWidth
              onChange={(e) => setfullName(e.target.value)}
          />
          <br />
          <input 
              className="form-control"
              label='Address'
              id='outlined-email-input'
              helperText={`Address`}
              margin='normal'
              type='text'
              placeholder="Address"
              required
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <input 
              className="form-control"
              label='Phone No.'
              id='outlined-email-input'
              helperText={`Phone No to Contact You`}
              margin='normal'
              type='text'
              required
              fullWidth
              placeholder="+1 "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <input 
              className="form-control"
              label='Email'
              id='outlined-email-input'
              helperText={`Email you'll recive updates and receipts on`}
              margin='normal'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
          />
          <br />
          <CardInput />
          <div className={classes.div}>
            <Button disabled={paysubmit} variant="contained" fullWidth color="primary" className={classes.button} onClick={handleSubmit}>
              {
                paysubmit ? (
                  <>Please Be Paisence ...</>
                ) : (
                  <>
                  Pay
                  </>
                )
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </center>
  );
}

export default HomePage;
