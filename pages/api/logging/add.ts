import { ActivityModelSchemaValidator } from "@/models/activity.model";
import { createActivity } from "../../../DB/access.layer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;
    // Validate incoming post data against the schema
    const { error, value } = ActivityModelSchemaValidator.validate(req.body);

    if (error) {
        // Validation error handling
        return res.status(400).json({ error: error.details });
    }

    try {
        // Save validated post data to Firebase Realtime Database
        let key = await createActivity(value);
        // Respond with success message
        res.status(201).json({ message: 'Logged successfully', ID: key });
    } 
    catch (err) {
        // Database error handling
        console.error('Error Logging:', err);
        res.status(500).json({ error: 'Failed to Log' });
    }

    
  } 
  else 
  {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

