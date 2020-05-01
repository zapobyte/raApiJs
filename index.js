// import modules
const https = require('https');

class RaApi {
    constructor(user,api){
        this.url = "https://retroachievements.org/API/";
        this.user = user;
        this.api = api;
        this.apiPages = {
            getTopTenUsers:'API_GetTopTenUsers.php',
            getGameInfo:'API_GetGame.php',
            getGameInfoExtended:'API_GetGameExtended.php',
            getConsoleIDs:'API_GetConsoleIDs.php',
            getGameList:'API_GetGameList.php',
            getFeedFor:'API_GetFeed.php',
            getUserRankAndScore:'API_GetUserRankAndScore.php',
            getUserRecentlyPlayedGames:'API_GetUserRecentlyPlayedGames.php',
            getUserSummary:'API_GetUserSummary.php',
            getGameInfoAndUserProgress:'API_GetGameInfoAndUserProgress.php',
            getAchievementsEarnedOnDay:'API_GetAchievementsEarnedOnDay.php',
            getAchievementsEarnedBetween:'API_GetAchievementsEarnedBetween.php'
        }
    }

    composeBaseUrl(page){
        return `${this.url}${page}?z=${this.user}&y=${this.api}`;
    }

    makeRequest(url,resolve,reject){
        let body = [];
        const req = https.request(url,{
            method:'GET'
        }, function(res){
            res.on('data',function(chunk){
                body.push(chunk);
            });
            res.on('end', function() {
                body = JSON.parse(Buffer.concat(body).toString());
                resolve(body);
              });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
            reject(e);
        }); 
        req.end();
    }

    getTopTenUsers(){
        return new Promise((resolve,reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getTopTenUsers);
            this.makeRequest(url,resolve,reject);
        })
    }
    
    getGameInfo(gameid){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfo);
            url +=`&i=${gameid}`;
            this.makeRequest(url,resolve,reject);
        })
    }
    
    getGameInfoExtended(gameId){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfoExtended);
            url +=`i=${gameId}`;
            this.makeRequest(url,resolve,reject);
        })
    }
    
    getConsoleIDs(){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getConsoleIDs);
            this.makeRequest(url,resolve,reject);
        })
    }

    getGameList(consoleId){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameList);
            url +=`&i=${consoleId}`;
            this.makeRequest(url,resolve,reject);
        })
    }
    
    getFeedFor(user,count,offset){
        return new Promise((resolve, reject)=>{
            if(!offset){
                offset = 0;
            }
            let url = this.composeBaseUrl(this.apiPages.getFeedFor);
            url +=`&u=${user}&c=${count}&o=${offset}`;
            this.makeRequest(url,resolve,reject);
        })
    }
    
    getUserRankAndScore(user){
          return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getUserRankAndScore);
            url +=`&u=${user}`;
            this.makeRequest(url,resolve,reject);
        })
    }
    
	getUserRecentlyPlayedGames(user,count,offset){
	      return new Promise((resolve, reject)=>{
            if(!offset){
                offset = 0;
            }
            let url = this.composeBaseUrl(this.apiPages.getUserRecentlyPlayedGames);
            url +=`&u=${user}&c=${count}&o=${offset}`;
            this.makeRequest(url,resolve,reject);
        })
	}
	
    getUserSummary(user,numRecentGames){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getUserSummary);
            url +=`&u=${user}&g=${numRecentGames}&a=5`;
            this.makeRequest(url,resolve,reject);
        })
    }
	
	getGameInfoAndUserProgress(user,gameId){
	    return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfoAndUserProgress);
            url +=`&u=${user}&g=${gameId}`;
            this.makeRequest(url,resolve,reject);
        })
	}
	
 	getAchievementsEarnedOnDay(user,date){
 	    return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getAchievementsEarnedOnDay);
            url +=`u=${user}&d=${date}`;
            this.makeRequest(url,resolve,reject);
        })
 	}
	
    getAchievementsEarnedBetween(user,dateStart,dateEnd){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getAchievementsEarnedBetween);
            url +=`&u=${user}&f=${dateStart}&t=${dateEnd}`;
            this.makeRequest(url,resolve,reject);
        })
    }

}

// export module
module.exports = RaApi;
