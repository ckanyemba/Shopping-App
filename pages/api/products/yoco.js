import { useState } from 'react';
import Stripe from 'stripe';

const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY');

export const makePayment = async () => {
  try {
    // Initialize Yoco checkout script
    // ...

    // Make a call to the serverless function to retrieve payment details
    const response = await fetch('/api/products/yoco'), { method: 'POST' });
    const paymentDetails = await response.json();

    // Create payment object
    const paymentObject = {
      currency: paymentDetails.currency,
      amount: paymentDetails.amount,
      order_id: paymentDetails.order_id,
      handler: function (response) {
        // Handle successful payment
        // ...
      },
    };

    // Call the Yoco payment with the payment object
    // ...
  } catch (error) {
    console.error('Error making payment', error)
  }
};