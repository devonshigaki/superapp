import { CloudFunctions } from '@google-cloud/functions';

const cloudFunctions = new CloudFunctions();

export const triggerEmailFunction = async (email: string, subject: string, message: string) => {
  try {
    const functionName = 'sendWelcomeEmail'; // Replace with your actual function name
    const data = { email, subject, message };
    await cloudFunctions.function(functionName)(data);
    console.log(`Email function triggered successfully.`);
  } catch (error) {
    console.error('Error triggering email function:', error);
    throw error;
  }
};
