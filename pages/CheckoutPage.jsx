import React, { useState } from 'react';
import styles from '../styles/CheckoutPage.module.css';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from '../src/components/CardForm/CardForm'; //Import CardForm component

const CheckoutPage = () => {
  // Load Stripe using the public key
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          console.log('Payment successful!', data);
          // Reset form data and errors
          setFormData({
            name: '',
            email: '',
            address: '',
            paymentMethod: 'credit-card',
          });
          setErrors({});
        } else {
          console.error('Payment failed', data.message);
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    }
  };

     const handleCardPayment = async (tokenId) => {
    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenId }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Payment successful!', data);
        // Reset form data and errors
        setFormData({
          name: '',
          email: '',
          address: '',
          paymentMethod: 'credit-card',
        });
        setErrors({});
      } else {
        console.error('Payment failed', data.message);
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Checkout Page</h1>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="paymentMethod" className={styles.label}>Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
         {formData.paymentMethod === 'credit-card' && (
          <Elements stripe={stripePromise}>
            <CardForm onSubmit={handleCardPayment} />
          </Elements>
        )}
        <button type="button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
