# RetroAchievements.org Javascript API wrapper

This is a JS wrapper over their already PHP API to access [RetroAchievements API](retroachievements.org) API easly with javascript. The API has 0 dependencies only vanilla javascript.

### Usage

```
Import module into your file:
const raApi = require('raapijs');
```

Authentication to the [RetroAchievements](retroachievements.org) site must be done so you should first create an account so you can user your user and api key.

If you already have an account or have done the above step you need to authenticate:

```
const user = 'username'; // get your username from retroachivements.org
const apiKey = 'yourApiKey'; // get your api key from retroachivements.org profile page
```

```
const raApi = new RaApi(user,apiKey); // initialize the module
```

Once the module has been initialzied you can easly use it by calling the require api call function. Each function is a promise function and it can be called like:

```
// Get top ten users from [RetroAchievements](retroachievements.org)
raApi.getTopTenUsers().then((users)=>{
    console.log(users); // Returns
        [
        {
        	'1': 'MaxMilyin',
        	'2': '413059',
        	'3': '1299618'
        },
        {
        	'1': 'HippopotamusRex',
        	'2': '354656',
        	'3': '1229216'
        },
        {
        	'1': 'BerserkerBR',
        	'2': '311072',
        	'3': '950623'
        },
        {
        	'1': 'sigma62',
        	'2': '277591',
        	'3': '654364'
        },
        {
        	'1': 'Wendigo',
        	'2': '266284',
        	'3': '1022807'
        },
        {
        	'1': 'Veritasu',
        	'2': '225254',
        	'3': '499926'
        },
        {
        	'1': 'oakley',
        	'2': '218141',
        	'3': '474658'
        },
        {
        	'1': 'SeredaVadim',
        	'2': '204732',
        	'3': '631451'
        },
        {
        	'1': 'FabricioPrie',
        	'2': '204336',
        	'3': '473600'
        },
        {
        	'1': 'GOGZero',
        	'2': '201411',
        	'3': '434551'
        }]

})
```

#### Avaiable methods

**General**

`getTopTenUsers()`

`getConsoleIDs()`

**Game**

```
/*
	@consoleId number
*/
getGameList(consoleID)
```

```
/*
	@consoleId number
*/
getGameInfo( gameID )
```

```
/*
	@consoleId number
*/
getGameInfoExtended( gameID )
```

```
/*
	@user string
	@consoleId number
*/
getGameInfoAndUserProgress( user, gameID )
```

**User**

```
/*
	@user string
	@consoleId number
*/
getUserRankAndScore( user )
```

```
/*
	@user string
	@numGames number
*/
getUserRecentlyPlayedGames( user, numGames )
```

```
/*
	@user string
	@gamesCSV number
*/
getUserProgress( user, gamesCSV )
```

```
/*
	@user string
	@numRecentGames number
*/
getUserSummary( user, numRecentGames )
```

```
/*
	@user string
	@numRecentActivities number
*/
getFeedFor( user, numRecentActivities )
```

**Achievement**

```
/*
	@user string
	@date date format eg. 2019-12-13
*/
getAchievementsEarnedOnDay( user, date )
```

```
/*
	@user string
	@timeStart date format eg. 2019-12-13
	@timeEnd date format eg. 2019-12-13
*/
getAchievementsEarnedBetween( user, timeStart, timeEnd )
```

## Testing

Before committing try to run the test suite by using the 'npm run tests' command.

### Note

This is an unofficial API wrapper and it's not developed or endored by [RetroAchievements.org](retroachievements.org)
