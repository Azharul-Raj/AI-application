import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Home() {
  const [subscriptionType, setSubscriptionType] = useState('basic');

  const handleSubscription = async (event:any) => {
    event.preventDefault();

    // Get the price ID for the selected subscription type
    let priceId;
    switch (subscriptionType) {
      case 'basic':
        priceId = process.env.NEXT_PUBLIC_BASIC_PRICE_ID;
        break;
      case 'standard':
        priceId = process.env.NEXT_PUBLIC_STANDARD_PRICE_ID;
        break;
      case 'premium':
        priceId = process.env.NEXT_PUBLIC_PREMIUM_PRICE_ID;
        break;
      default:
        return;
    }

    // Create a Checkout Session
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });
    const session = await response.json();

    // Redirect to Checkout
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: session.sessionId });
  };

  return (
    <form onSubmit={handleSubscription}>
      <h2>Choose your subscription</h2>
      <select
        value={subscriptionType}
        onChange={(event) => setSubscriptionType(event.target.value)}
      >
        <option value="basic">Basic</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>
      <button type="submit">Subscribe</button>
    </form>
  );
}