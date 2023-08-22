import { useEffect } from 'react';
import { Yoco } from 'yoco';

export default function PaymentPage() {
  useEffect(() => {
    const yoco = new Yoco({
      publicKey: '43467sgs54765h',
    });

    yoco.showCheckout({
      amountInCents: 1000, // Amount in cents
      currency: 'ZAR', // Currency
      name: 'Your Business Name',
      description: 'Your Product Description',
      callbackUrl: 'https://yourwebsite.com/callback',
      return_url: 'https://yourwebsite.com/return', // Return URL after payment
    });
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
    </div>
  );
}