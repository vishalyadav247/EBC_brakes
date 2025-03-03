// server/redisClient.js
const redis = require('redis');
require('dotenv').config()

// 1. Create a Redis client
//    Adjust the URL if needed (e.g. from env vars or a remote host)
const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});

// 2. Catch any client-level errors
redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

// 3. An async function to connect the client
const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log('Connected to Redis');
  }
};

module.exports = {
  redisClient,
  connectRedis,
};
