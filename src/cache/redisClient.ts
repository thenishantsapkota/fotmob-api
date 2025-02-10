import Redis from "ioredis";
import { envVars } from "../config";

const redis = new Redis({
  host: envVars.REDIS.REDIS_HOST,
  port: parseInt(envVars.REDIS.REDIS_PORT as string),
});

redis.on("connect", () => {
  console.log("✅ Connected to Redis!");
});

redis.on("error", (error) => {
  console.error("❌ Error connecting to Redis", error);
});

export default redis;
