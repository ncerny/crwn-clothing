import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hn1icBAxPTMaFG29WMhXQq0dtZDer5WiVb3faLbc13FnKxz4jCkfRJUTHvS7PttPEbFeRgnZ6IaoqnounPnCR5x00gBjLy80C';

  const onToken = (token) => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment.  Please ensure you use the provided credit card number.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddresss
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
