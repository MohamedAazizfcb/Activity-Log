import { fetchPaginatedActivities } from "../../../DB/access.layer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { data } = req.body;
        if(!data?.pageSize || data?.startAtKey == undefined)
        {
          res.status(402).json({});
        }
        const pageSize = data.pageSize;
        const startAtKey = data.startAtKey;
  
        let snapshot = await fetchPaginatedActivities(pageSize, startAtKey);
        if(snapshot){
            res.status(201).json(snapshot);
        }
        else{
            res.status(401).json({});
        }
    }
    catch (err) {
        // Database error handling
        console.error('Error Getting:', err);
        res.status(500).json({ error: 'Failed to get' });
    }
  } 
  else 
  {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

