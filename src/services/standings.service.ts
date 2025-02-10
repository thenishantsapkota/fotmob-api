import { FotMobAPI } from "../api";

export class StandingsService {
  /**
   *
   * @param leagueId number
   *
   * URL: https://fotmob.com/api/tltable?leagueId=${leagueId}
   */
  static async getStandings(leagueId: number) {
    const endpoint = `tltable?leagueId=${leagueId}`;
    const cacheKey = `standings:${leagueId}`;

    const data = await FotMobAPI.fetchData(endpoint, cacheKey);
    const standings = data[0].data.table.all;

    return {
      success: true,
      message: "Standings fetched successfully",
      standings,
    };
  }
}
