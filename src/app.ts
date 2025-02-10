import express from "express";
import cors from "cors";
import fotMobRoutes from "./routes/fotmobRoutes";
import redis from "./cache/redisClient";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", fotMobRoutes);

app.get("/", async (req, res) => {
  await redis.set("message", "Hello World!");
  const message = await redis.get("message");

  res.send({ message });
});

app.get("/health", (req, res) => {
  res.send({ status: "online", message: "Service is up and running!" });
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found" });
});

export default app;
