import Stripe from 'stripe';
import { NextApiRequest,NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{
    apiVersion:"2022-11-15"
});

export default async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === 'POST') {
    const { subscriptionId } = req.body;

    try {
      // Cancel the subscription
      await stripe.subscriptions.del(subscriptionId);

      res.status(200).end();
    } catch (e:any) {
      res.status(400);
      return res.send({
        error: {
          message: e.message,
        }
      });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};