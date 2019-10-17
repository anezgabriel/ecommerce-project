import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import icon from '../../assets/crwn.ico';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_RA7ziNpKZTWi5M336XAqOSLd00cAnNORZb';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesfull');
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
