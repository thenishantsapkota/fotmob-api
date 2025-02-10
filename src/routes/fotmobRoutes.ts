import express from "express";
import { getStandings } from "../controllers";

const router = express.Router();

router.get("/standings/:league", getStandings);
// router.get("/leagues/:league", getLeagueData);

export default router;
