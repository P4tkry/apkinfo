import {createClient} from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
});
client.on("error", (error) => {
    console.error('Error in Redis connection:');
    console.error(error);
});
client.on("connect", () => {
    console.log('Connected to Redis');
});

export default client;
