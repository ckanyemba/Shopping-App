// components/CardForm.js
import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from '../../../styles/CardForm.module.css';

const CardForm = ({ onSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      onSubmit(token.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <CardElement className={styles.cardElement} />
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" className={styles.button}>Pay Now</button>
    </form>
  );
};

export default CardForm;