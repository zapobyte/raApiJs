const assert = require("assert");
const RaApi = require("../index");

const user = "zapo"; // get your username from retroachivements.org
const apiKey = "S2gsDb3rPw7sxRwbCGcqc1O4RpfRxtnF"; // get your api key from retroachivements.org profile page

const raApi = new RaApi(user, apiKey); // initialize the module

let consoleIds = [];
const randomConsoleId = () => {
  return Math.floor(Math.random() * consoleIds.length);
};

describe("RA test suite", function () {
  describe("getTopTenUsers()", function () {
    it("should return top 10 RA users", async function () {
      try {
        const top10Users = await raApi.getTopTenUsers();
        assert.equal(top10Users.length, 10);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getConsoleIDs() - NOTE: If fails run test again :)", function () {
    it("get all console ids from RA website.", async function () {
      try {
        const cIds = await raApi.getConsoleIDs();
        consoleIds = cIds;
        assert.notEqual(cIds.length, 0);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getGameList(consoleId) - NOTE: If fails run test again :)", function () {
    it("get  all games for a specific console providing the id", async function () {
      try {
        let consoleId = randomConsoleId();
        const gamesList = await raApi.getGameList(consoleId);
        assert.notEqual(gamesList.length, 0);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getGameInfo(gameId) - NOTE: If fails run test again :)", function () {
    it("get game info for a specific game id ", async function () {
      try {
        let consoleId = randomConsoleId();

        const gamesList = await raApi.getGameList(consoleId);
        const randomGameId = Math.floor(Math.random() * gamesList.length);
        const gameInfo = await raApi.getGameInfo(randomGameId);
        assert.notEqual(typeof gameInfo["ConsoleID"], "object");
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getGameInfoExtended(gameId)", function () {
    it("get extended game info for a specific game id ", async function () {
      try {
        let consoleId = randomConsoleId();
        const gamesList = await raApi.getGameList(consoleId);
        const randomGameId = Math.floor(Math.random() * gamesList.length);
        const extendedGameInfo = await raApi.getGameInfoExtended(randomGameId);
        assert.equal(typeof extendedGameInfo["ID"], "number");
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getFeedFor(user,count,offset)", function () {
    it("get user feed dummy profile", async function () {
      try {
        const feed = await raApi.getFeedFor(user, 1, 0);
        assert.ok(feed);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getUserRankAndScore(user)", function () {
    it("get user rank and score", async function () {
      try {
        const fetchuser = await raApi.getUserRankAndScore(user);
        assert.ok(fetchuser);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getUserRecentlyPlayedGames(user,count,offset)", function () {
    it("get recent user played game. test only gets last game played ", async function () {
      try {
        const fetchuser = await raApi.getUserRecentlyPlayedGames(user, 1, 0);
        assert.equal(fetchuser.length, 1);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getUserSummary(user,numRecentGames)", function () {
    it("get  user summary. ", async function () {
      try {
        const fetchuser = await raApi.getUserRecentlyPlayedGames(user, 1);
        assert.equal(fetchuser.length, 1);
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getGameInfoAndUserProgress(user,gameId)", function () {
    it("get  info and progress of user. ", async function () {
      try {
        let consoleId = randomConsoleId();
        const gamesList = await raApi.getGameList(consoleId);
        const randomGameId = Math.floor(Math.random() * gamesList.length);
        const info = await raApi.getGameInfoAndUserProgress(user, randomGameId);
        assert.equal(typeof info["ID"], "number");
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getAchievementsEarnedOnDay(user,date)", function () {
    it("get user achievements earned for today. ", async function () {
      try {
        const day =
          new Date().getDate() < 10
            ? `0${new Date().getDate()}`
            : new Date().getDate();
        const month =
          new Date().getMonth() < 10
            ? `0${new Date().getMonth()}`
            : new Date().getMonth();
        const date = `${new Date().getFullYear()}-${month}-${day}`;
        const cheevoList = await raApi.getAchievementsEarnedOnDay(user, date);
        assert.equal(typeof cheevoList, "array");
      } catch (error) {
        assert.fail(error);
      }
    });
  });

  describe("getAchievementsEarnedBetween(user,dateStart,dateEnd)", function () {
    it("get user achievements earned from yesterday until today. ", async function () {
      try {
        const yesterday =
          new Date().getDate() < 10
            ? `0${new Date().getDate() - 1}`
            : new Date().getDate() - 1;
        const tomorrow =
          new Date().getDate() < 10
            ? `0${new Date().getDate() + 1}`
            : new Date().getDate() + 1;
        const month =
          new Date().getMonth() < 10
            ? `0${new Date().getMonth()}`
            : new Date().getMonth();
        const dateStart = `${new Date().getFullYear()}-${month}-${yesterday} 00:00:00`;
        const dateEnd = `${new Date().getFullYear()}-${month}-${tomorrow} 00:00:00`;
        const cheevoList = await raApi.getAchievementsEarnedBetween(
          user,
          dateStart,
          dateEnd
        );
        assert.equal(typeof cheevoList.length, "number");
      } catch (error) {
        assert.fail(error);
      }
    });
  });
});
