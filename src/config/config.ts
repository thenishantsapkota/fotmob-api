import * as dotenv from "dotenv";

dotenv.config();

export const envVars = {
  APP: {
    PORT: 3000,
    X_MAS_ENDPOINT: process.env.X_MAS_ENDPOINT,
  },
  REDIS: {
    REDIS_HOST: process.env.REDIS_HOST || "localhost",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
  },
  JWT:{
    SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.JWT_EXPIRES_IN
  }
};
