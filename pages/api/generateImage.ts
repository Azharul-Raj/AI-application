import {NextApiRequest,NextApiResponse} from 'next'
import {Configuration,OpenAIApi} from 'openai'


const configuration=new Configuration({
    organization:process.env.ORGANIZATION_KEY,
    apiKey:process.env.API_KEY
})
const openai=new OpenAIApi(configuration);
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {prompt}=req.body;
    try {        
        if(!prompt){
            res.json("Please provide a prompt");
            return
        }
        const response = await openai.createImage({
            prompt:`${prompt}`,
            n: 5,
            size: "1024x1024",
          });
         const image_urls = response.data.data;
        res.status(200).json({ images: image_urls })
    } catch (error) {
        res.status(500).json(error)
    }
  }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
//   ) {
//     res.status(200).json({ name: 'John Doe' })
//   }