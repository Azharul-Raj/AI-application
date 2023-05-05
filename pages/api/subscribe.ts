import Stripe from "stripe";
import { NextApiRequest,NextApiResponse } from "next";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY as string,{
    apiVersion:"2022-11-15"
})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="POST"){
        const {priceId}=req.body;
        try {
            const session=await stripe.checkout.sessions.create({
                payment_method_types:['card'],
                line_items:[
                    {
                        price:priceId,
                        quantity:1,
                    },
                ],
                mode:"subscription",
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cancel`,
            })
            res.status(200).json(session);
        } catch (err:any) {
            res.status(400).json({message:err.message})
        }
    }
    else{
        res.setHeader("Allow","POST"),
        res.status(400).end("Method not allowed")
    }
}