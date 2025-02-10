import { Request, Response, NextFunction } from "express";
import { LEAGUE_IDS } from "../config";
import { StandingsService } from "../services";

export const getStandings = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const league = req.params.league as string;
    const leagueId = LEAGUE_IDS[league.toUpperCase()];
    if (!leagueId) {
      return res.status(404).json({ message: "Invalid league name!" });
    }

    const standings = await StandingsService.getStandings(leagueId);
    return res.json(standings);
  } catch (error) {
    next(error);
  }
};
