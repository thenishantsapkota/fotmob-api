import axios from "axios";
import redis from "../cache/redisClient";
import { BASE_URL, CACHE_EXPIRATION, envVars } from "../config";

export class FotMobAPI {
  static async fetchData(endpoint: string, cacheKey: string) {
    try {
      const cachedData = await redis.get(cacheKey);
      if (cachedData) return JSON.parse(cachedData);

      const xMasToken = await FotMobAPI.getXMasToken();

      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
          "X-Mas": xMasToken["x-mas"],
        },
      });

      await redis.setex(
        cacheKey,
        CACHE_EXPIRATION,
        JSON.stringify(response.data)
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data from FotMob API", error);
      throw error;
    }
  }

  static async getXMasToken() {
    try {
      const response = await axios.get(envVars.APP.X_MAS_ENDPOINT as string);

      return response.data;
    } catch (error) {
      console.error("Error fetching data from FotMob API", error);
      throw error;
    }
  }
}
