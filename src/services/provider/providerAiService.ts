import axios from 'axios';

const VERTEX_AI_ENDPOINT = 'https://us-central1-aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/endpoints/YOUR_ENDPOINT_ID:predict';

export const calculateBlockScore = async (reportData: any) => {
  try {
    const response = await axios.post(VERTEX_AI_ENDPOINT, {
      instances: [reportData],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_CLOUD_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.predictions[0].score;
  } catch (error) {
    console.error('Error calculating BlockScore:', error);
    throw error;
  }
};
