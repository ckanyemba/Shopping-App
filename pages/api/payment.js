// api/payment.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, address, paymentMethod } = req.body;

  // Simulate payment processing
  const paymentSuccess = Math.random() < 0.8; // 80% success rate

  if (paymentSuccess) {
    // In a real app, you'd create an order in your database here
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ success: false, message: 'Payment failed' });
  }
}
