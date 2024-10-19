import { PubSub } from '@google-cloud/pubsub';

const pubSubClient = new PubSub();

export const publishMessage = async (topicName: string, message: string) => {
  try {
    const topic = pubSubClient.topic(topicName);
    await topic.publish(Buffer.from(message));
    console.log('Message published successfully');
  } catch (error) {
    console.error('Error publishing message:', error);
    throw error;
  }
};
