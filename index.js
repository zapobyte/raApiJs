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

    getTopTenUsers(){
        return new Promise((resolve,reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getTopTenUsers);
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
        })

    }
    
    getGameInfo(gameid){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfo);
            url +=`&i=${gameid}`;
            console.log(url)
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
        })
    }
    
    getGameInfoExtended(gameId){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfo);
            url +=`i=${gameId}`;
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
        })
    }
    
    getConsoleIDs(){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getConsoleIDs);
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
        })
    }

    getGameList(consoleId){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getConsoleIDs);
            url +=`i=${consoleId}`;
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
        })
    }
    
    getFeedFor(user,count,offset){
        return new Promise((resolve, reject)=>{
            if(!offset){
                offset = 0;
            }
            let url = this.composeBaseUrl(this.apiPages.getFeedFor);
            url +=`u=${user}&c=${count}&o=${offset}`;
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
        })
    }
    
    getUserRankAndScore(user){
          return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getUserRankAndScore);
            url +=`u=${user}`;
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
        })
    }
    
	getUserRecentlyPlayedGames(user,count,offset){
	      return new Promise((resolve, reject)=>{
            if(!offset){
                offset = 0;
            }
            let url = this.composeBaseUrl(this.apiPages.getUserRecentlyPlayedGames);
            url +=`u=${user}&c=${count}&o=${offset}`;
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
        })
	}
	
    getUserSummary(user,numRecentGames){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getUserSummary);
            url +=`u=${user}&g=${numRecentGames}&a=5`;
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
        })
    }
	
	getGameInfoAndUserProgress(user,gameId){
	    return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfoAndUserProgress);
            url +=`u=${user}&g=${gameId}`;
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
        })
	}
	
 	getAchievementsEarnedOnDay(user,date){
 	    return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfoAndUserProgress);
            url +=`u=${user}&d=${date}`;
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
        })
 	}
	
    getAchievementsEarnedBetween(user,dateStart,dateEnd){
        return new Promise((resolve, reject)=>{
            let url = this.composeBaseUrl(this.apiPages.getGameInfoAndUserProgress);
            url +=`u=${user}&f=${dateStart}&t=${dateEnd}`;
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
        })
    }

}

// export module
module.exports = RaApi;