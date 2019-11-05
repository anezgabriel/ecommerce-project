import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import icon from '../../assets/crwn.ico';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_RA7ziNpKZTWi5M336XAqOSLd00cAnNORZb';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(res => {
        alert('Payment was Succesfull');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce Project"
      billingAddress
      shippingAddress
      image={icon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
