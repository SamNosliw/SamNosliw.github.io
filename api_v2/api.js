var apiData = {
	"user":
	{
		"ammo":
		{
			"comments": "<ul><li>Use boolean for 'equiped' field.</li></ul>",
			"old_api": "{\"ammo\":[{\"ammoID\":2,\"typeID\":1,\"size\":\"9mm Parabellum Round\",\"type\":\"Standard\",\"quantity\":94925,\"equipped\":1},{\"ammoID\":1,\"typeID\":1,\"size\":\"12 Gauge Cartridge\",\"type\":\"Standard\",\"quantity\":671,\"equipped\":0},{\"ammoID\":3,\"typeID\":1,\"size\":\"5.7mm High Vel. Round\",\"type\":\"Standard\",\"quantity\":9523,\"equipped\":0},{\"ammoID\":4,\"typeID\":1,\"size\":\"7.62 mm Rifle Round\",\"type\":\"Standard\",\"quantity\":9030,\"equipped\":0}]}",
			"new_api": "{\"ammo\":[{\"ammoID\":2,\"typeID\":1,\"size\":\"9mm Parabellum Round\",\"type\":\"Standard\",\"quantity\":94925,\"equipped\":true},{\"ammoID\":1,\"typeID\":1,\"size\":\"12 Gauge Cartridge\",\"type\":\"Standard\",\"quantity\":671,\"equipped\":false},{\"ammoID\":3,\"typeID\":1,\"size\":\"5.7mm High Vel. Round\",\"type\":\"Standard\",\"quantity\":9523,\"equipped\":false},{\"ammoID\":4,\"typeID\":1,\"size\":\"7.62 mm Rifle Round\",\"type\":\"Standard\",\"quantity\":9030,\"equipped\":false}]}"
		},
		"attacks":
		{
			"comments": "<ul><li>Switch from an object to an array, create 'id' field inside array.</li><li>Use boolean for 'stealthed', 'raid' and 'ranked_war' fields.</li></ul>",
			"old_api": "{\"attacks\":{\"236476780\":{\"code\":\"1001b5c666c2ee0cbb84846459bfa178\",\"timestamp_started\":1681902968,\"timestamp_ended\":1681902991,\"attacker_id\":1455582,\"attacker_name\":\"Bug\",\"attacker_faction\":8989,\"attacker_factionname\":\"JUX HQ\",\"defender_id\":17,\"defender_name\":\"Easter Bunny\",\"defender_faction\":0,\"defender_factionname\":\"\",\"result\":\"Assist\",\"stealthed\":0,\"respect\":0,\"chain\":0,\"raid\":0,\"ranked_war\":0,\"respect_gain\":0,\"respect_loss\":0,\"modifiers\":{\"fair_fight\":1,\"war\":1,\"retaliation\":1,\"group_attack\":1,\"overseas\":1,\"chain_bonus\":1}},\"233561977\":{\"code\":\"89c417dd26dfe6fa5f21d407ab6132ee\",\"timestamp_started\":1679740585,\"timestamp_ended\":1679740594,\"attacker_id\":60666,\"attacker_name\":\"alguem\",\"attacker_faction\":478,\"attacker_factionname\":\"PT-Penguins\",\"defender_id\":1455582,\"defender_name\":\"Bug\",\"defender_faction\":8989,\"defender_factionname\":\"JUX HQ\",\"result\":\"Attacked\",\"stealthed\":0,\"respect\":13.63,\"chain\":5589,\"raid\":0,\"ranked_war\":1,\"respect_gain\":13.63,\"respect_loss\":3.41,\"modifiers\":{\"fair_fight\":2.88,\"war\":2,\"retaliation\":1,\"group_attack\":1,\"overseas\":1,\"chain_bonus\":1.69}}}}",
			"new_api": "{\"attacks\":[{\"id\": 236476780, \"code\":\"1001b5c666c2ee0cbb84846459bfa178\",\"timestamp_started\":1681902968,\"timestamp_ended\":1681902991,\"attacker_id\":1455582,\"attacker_name\":\"Bug\",\"attacker_faction\":8989,\"attacker_factionname\":\"JUX HQ\",\"defender_id\":17,\"defender_name\":\"Easter Bunny\",\"defender_faction\":0,\"defender_factionname\":\"\",\"result\":\"Assist\",\"stealthed\":false,\"respect\":0,\"chain\":0,\"raid\":false,\"ranked_war\":false,\"respect_gain\":0,\"respect_loss\":0,\"modifiers\":{\"fair_fight\":1,\"war\":1,\"retaliation\":1,\"group_attack\":1,\"overseas\":1,\"chain_bonus\":1}},{\"id\": 233561977, \"code\":\"89c417dd26dfe6fa5f21d407ab6132ee\",\"timestamp_started\":1679740585,\"timestamp_ended\":1679740594,\"attacker_id\":60666,\"attacker_name\":\"alguem\",\"attacker_faction\":478,\"attacker_factionname\":\"PT-Penguins\",\"defender_id\":1455582,\"defender_name\":\"Bug\",\"defender_faction\":8989,\"defender_factionname\":\"JUX HQ\",\"result\":\"Attacked\",\"stealthed\":false,\"respect\":13.63,\"chain\":5589,\"raid\":false,\"ranked_war\":true,\"respect_gain\":13.63,\"respect_loss\":3.41,\"modifiers\":{\"fair_fight\":2.88,\"war\":2,\"retaliation\":1,\"group_attack\":1,\"overseas\":1,\"chain_bonus\":1.69}}]}"
		},
		"attacksfull":
		{
			"comments": "<ul><li>Rename response wrapper to 'attacksfull'.</li><li>Switch from an object to an array, create 'id' field inside array.</li><li>Use boolean for 'stealthed' field.</li></ul>",
			"old_api": "{\"attacks\":{\"236476780\":{\"code\":\"1001b5c666c2ee0cbb84846459bfa178\",\"timestamp_started\":1681902968,\"timestamp_ended\":1681902991,\"attacker_id\":1455582,\"attacker_faction\":8989,\"defender_id\":17,\"defender_faction\":0,\"result\":\"Assist\",\"stealthed\":0,\"respect\":0},\"233577152\":{\"code\":\"e97234028321d0e4aa08a5c8c90b9e0b\",\"timestamp_started\":1679751649,\"timestamp_ended\":1679751651,\"attacker_id\":363768,\"attacker_faction\":478,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Assist\",\"stealthed\":0,\"respect\":0},\"233577148\":{\"code\":\"db04242d332f5dc70e5887085fe33fbc\",\"timestamp_started\":1679751646,\"timestamp_ended\":1679751657,\"attacker_id\":1568593,\"attacker_faction\":8336,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Hospitalized\",\"stealthed\":0,\"respect\":4.2},\"233564477\":{\"code\":\"06b8e5486d642190a024df1378b0ba8b\",\"timestamp_started\":1679742459,\"timestamp_ended\":1679742465,\"attacker_id\":488099,\"attacker_faction\":8509,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Hospitalized\",\"stealthed\":0,\"respect\":4.2}}}",
			"new_api": "{\"attacksfull\":[{\"id\": 236476780, \"code\":\"1001b5c666c2ee0cbb84846459bfa178\",\"timestamp_started\":1681902968,\"timestamp_ended\":1681902991,\"attacker_id\":1455582,\"attacker_faction\":8989,\"defender_id\":17,\"defender_faction\":0,\"result\":\"Assist\",\"stealthed\":false,\"respect\":0},{\"id\": 233577152, \"code\":\"e97234028321d0e4aa08a5c8c90b9e0b\",\"timestamp_started\":1679751649,\"timestamp_ended\":1679751651,\"attacker_id\":363768,\"attacker_faction\":478,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Assist\",\"stealthed\":false,\"respect\":0},{\"id\": 233577148, \"code\":\"db04242d332f5dc70e5887085fe33fbc\",\"timestamp_started\":1679751646,\"timestamp_ended\":1679751657,\"attacker_id\":1568593,\"attacker_faction\":8336,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Hospitalized\",\"stealthed\":false,\"respect\":4.2},{\"id\": 233564477, \"code\":\"06b8e5486d642190a024df1378b0ba8b\",\"timestamp_started\":1679742459,\"timestamp_ended\":1679742465,\"attacker_id\":488099,\"attacker_faction\":8509,\"defender_id\":1455582,\"defender_faction\":8989,\"result\":\"Hospitalized\",\"stealthed\":false,\"respect\":4.2}]}"
		},
		"bars":
		{
			"comments": "<ul><li>Remove 'server_time', can be found via 'timestamp' selection.</li><li>Change 'ticktime' and 'fulltime' to use timestamps instead of relative seconds.</li><li>Change 'timeout' and 'cooldown' to use timestamps instead of relative seconds.</li><li>Wrap response in 'bars' object.</li></ul>",
			"old_api": "{\"server_time\":1681968482,\"happy\":{\"current\":4810,\"maximum\":5025,\"increment\":5,\"interval\":900,\"ticktime\":118,\"fulltime\":37918},\"life\":{\"current\":7500,\"maximum\":7500,\"increment\":450,\"interval\":300,\"ticktime\":118,\"fulltime\":0},\"energy\":{\"current\":70,\"maximum\":150,\"increment\":5,\"interval\":600,\"ticktime\":118,\"fulltime\":9118},\"nerve\":{\"current\":42,\"maximum\":100,\"increment\":1,\"interval\":300,\"ticktime\":118,\"fulltime\":17218},\"chain\":{\"current\":0,\"maximum\":25000,\"timeout\":0,\"modifier\":1,\"cooldown\":0}}",
			"new_api": "{\"bars\":{\"happy\":{\"current\":4810,\"maximum\":5025,\"increment\":5,\"interval\":900,\"ticktimestamp\":1681968600,\"fulltimestamp\":1682006400},\"life\":{\"current\":7500,\"maximum\":7500,\"increment\":450,\"interval\":300,\"ticktimestamp\":1681968600,\"fulltimestamp\":0},\"energy\":{\"current\":70,\"maximum\":150,\"increment\":5,\"interval\":600,\"ticktimestamp\":1681968600,\"fulltimetimestamp\":1681977600},\"nerve\":{\"current\":42,\"maximum\":100,\"increment\":1,\"interval\":300,\"ticktimestamp\":1681968600,\"fulltimestamp\":1681985700},\"chain\":{\"current\":0,\"maximum\":25000,\"timeout\":0,\"modifier\":1,\"cooldown\":0}}}"
		},
		"basic":
		{
			"comments": "<ul><li>Add 'honor' field to show current honour bar.</li><li>Add 'previous_usernames' field to show aliases.</li><li>Change 'name' to 'username' and 'player_id' to 'id'.</li><li>Wrap response in 'basic' object.</li></ul>",
			"old_api": "{\"level\":100,\"gender\":\"Male\",\"player_id\":1455582,\"name\":\"Bug\",\"status\":{\"description\":\"Okay\",\"details\":\"\",\"state\":\"Okay\",\"color\":\"green\",\"until\":0}}",
			"new_api": "{\"basic\":{\"level\":100,\"gender\":\"Male\",\"player_id\":1455582,\"username\":\"Bug\",\"status\":{\"description\":\"Okay\",\"details\":\"\",\"state\":\"Okay\",\"color\":\"green\",\"until\":0}, \"honor\": {\"id\": 161, \"name\": \"Bug\", \"image\": \"https://awardimages.torn.com/1455582-48181-large.png\", \"blue\": false}, \"previous_usernames\": []}}"
		},
		"battlestats":
		{
			"comments": "<ul><li>Combine each stat with 'modifier' and 'info'.</li><li>Convert 'modifier' to a float as a multiplier.</li><li>Wrap response in 'battlestats' object.</li></ul>",
			"old_api": "{\"strength\":2589188917,\"speed\":1773942476,\"dexterity\":1486188086,\"defense\":1218204200,\"total\":7067523679,\"strength_modifier\":23,\"defense_modifier\":19,\"speed_modifier\":21,\"dexterity_modifier\":45,\"strength_info\":[\"+30% to Strength from Merits\",\"+6% to Strength from Faction\",\"+5% to Strength from Education\",\"-4% to Strength from Addiction\",\"-14% to Strength from Drug\"],\"defense_info\":[\"+30% to Defense from Merits\",\"+11% to Defense from Education\",\"-4% to Defense from Addiction\",\"-18% to Defense from Drug\"],\"speed_info\":[\"+30% to Speed from Merits\",\"+14% to Speed from Education\",\"+6% to Speed from Faction\",\"-4% to Speed from Addiction\",\"-25% to Speed from Drug\"],\"dexterity_info\":[\"+30% to Dexterity from Merits\",\"+19% to Dexterity from Education\",\"-4% to Dexterity from Addiction\"]}",
			"new_api": "{\"battlestats\": {\"strength\": {\"total\": 2589188917, \"modifier\": 1.23, \"details\": [\"+30% to Strength from Merits\",\"+6% to Strength from Faction\",\"+5% to Strength from Education\",\"-4% to Strength from Addiction\",\"-14% to Strength from Drug\"]}, \"speed\": {\"total\": 1773942476, \"modifier\": 1.21, \"details\": [\"+30% to Speed from Merits\",\"+14% to Speed from Education\",\"+6% to Speed from Faction\",\"-4% to Speed from Addiction\",\"-25% to Speed from Drug\"]}, \"dexterity\": {\"1486188086\": 1773942476, \"modifier\": 1.45, \"details\": [\"+30% to Dexterity from Merits\",\"+19% to Dexterity from Education\",\"-4% to Dexterity from Addiction\"]}, \"defense\": {\"total\": 1218204200, \"modifier\": 1.19, \"details\": [\"+30% to Defense from Merits\",\"+11% to Defense from Education\",\"-4% to Defense from Addiction\",\"-18% to Defense from Drug\"]}, \"total\": 7067523679}}"
		},
		"bazaar":
		{
			"comments": "<ul><li>Add 'open' to determine opened/closed status of bazaar.</li><li>Wrap items in 'items' object to make space for 'open' field.</li></ul>",
			"old_api": "{\"bazaar\":[{\"ID\":815,\"name\":\"Keg of Beer\",\"type\":\"Supply Pack\",\"quantity\":1,\"price\":10294980,\"market_price\":9931249},{\"ID\":239,\"name\":\"Ninja Star\",\"type\":\"Temporary\",\"quantity\":6,\"price\":2490,\"market_price\":1124},{\"ID\":307,\"name\":\"Snowman\",\"type\":\"Other\",\"quantity\":1,\"price\":289985,\"market_price\":200000}]}",
			"new_api": "{\"bazaar\":{\"open\": true, \"items\": [{\"ID\":815,\"name\":\"Keg of Beer\",\"type\":\"Supply Pack\",\"quantity\":1,\"price\":10294980,\"market_price\":9931249},{\"ID\":239,\"name\":\"Ninja Star\",\"type\":\"Temporary\",\"quantity\":6,\"price\":2490,\"market_price\":1124},{\"ID\":307,\"name\":\"Snowman\",\"type\":\"Other\",\"quantity\":1,\"price\":289985,\"market_price\":200000}]}}"
		},
		"cooldowns":
		{
			"comments": "<ul><li>Use an object for each cooldown with 'until' field being the timestamp the cooldown ends.</li><li>Add a 'maximum' field with the maximum cooldown size in seconds.</li><li>List the item used to generate cooldown (as shown via app notifications).</li></ul>",
			"old_api": "{\"cooldowns\":{\"drug\":2811,\"medical\":13431,\"booster\":107047}}",
			"new_api": "{\"cooldowns\":{\"drug\":{\"until\": 1681971293, \"item\": {\"id\": 196, \"name\": \"Cannabis\"}},\"medical\": {\"until\": 1681981913, \"maximum\": 21600, \"item\": {\"id\": 731, \"name\": \"Empty Blood Bag\"}},\"booster\":{\"until\": 1682075529, \"maximum\": 172800, \"item\": {\"id\": 180, \"name\": \"Bottle of Beer\"}}}}"
		},
		"crimes":
		{
			"comments": "<ul><li>Rename 'criminalrecord' to 'crimes' to match selection.</li><li>Remove '_crimes' suffix.</li></ul>",
			"old_api": "{\"criminalrecord\":{\"selling_illegal_products\":5086,\"theft\":25009,\"auto_theft\":10027,\"drug_deals\":2747,\"computer_crimes\":10112,\"murder\":10013,\"fraud_crimes\":10017,\"other\":5081,\"total\":78092}}",
			"new_api": "{\"crimes\":{\"selling_illegal_products\":5086,\"theft\":25009,\"auto_theft\":10027,\"drug_deals\":2747,\"computer\":10112,\"murder\":10013,\"fraud\":10017,\"other\":5081,\"total\":78092}}"
		},
		"discord":
		{
			"comments": "",
			"old_api": "{\"discord\":{\"userID\":1455582,\"discordID\":\"117404572158394373\"}}",
			"new_api": "{\"discord\":{\"userID\":1455582,\"discordID\":\"117404572158394373\"}}"
		},
		"display":
		{
			"comments": "<ul><li>Changed 'ID' to 'id' to match other responses.</li></ul>",
			"old_api": "{\"display\":[{\"ID\":1027,\"name\":\"Badge : 15th Anniversary\",\"type\":\"Clothing\",\"quantity\":1,\"circulation\":25728,\"market_price\":0},{\"ID\":1028,\"name\":\"Birthday Cupcake\",\"type\":\"Candy\",\"quantity\":2,\"circulation\":32415,\"market_price\":2991667},{\"ID\":734,\"name\":\"Blood Bag : B+\",\"type\":\"Medical\",\"quantity\":18000,\"circulation\":1690803,\"market_price\":22410}]}",
			"new_api": "{\"display\":[{\"id\":1027,\"name\":\"Badge : 15th Anniversary\",\"type\":\"Clothing\",\"quantity\":1,\"circulation\":25728,\"market_price\":0},{\"id\":1028,\"name\":\"Birthday Cupcake\",\"type\":\"Candy\",\"quantity\":2,\"circulation\":32415,\"market_price\":2991667},{\"id\":734,\"name\":\"Blood Bag : B+\",\"type\":\"Medical\",\"quantity\":18000,\"circulation\":1690803,\"market_price\":22410}]}"
		},
		"education":
		{
			"comments": "<ul><li>Change 'education_timeleft' to 'endtime', the later being a timestamp for completion.</li><li>Wrap the response in 'education' object, remove the prefixes.</li></ul>",
			"old_api": "{\"education_current\":0,\"education_timeleft\":0,\"education_completed\":[1,2,3,4,5,6,7,8,9,10]}",
			"new_api": "{\"education\": {\"current\":0,\"endtime\":0,\"completed\":[1,2,3,4,5,6,7,8,9,10]}}"
		},
		"enlistedcars":
		{
			"comments": "New selection called 'enlistedcars' shows a list of all enlisted cars and modifications.",
			"old_api": "{}",
			"new_api": "{\"enlistedcars\": [{\"id\": 1128363, \"itemid\": 522, \"itemname\": \"Lexus LFA\",\"nickname\": \"(Withdrawal, Speedway)\", \"races_won\": 75, \"races_entered\": 192, \"value\": 1500700, \"points_spent\": 308, \"top_speed\": 260, \"upto60\": 3.1, \"brake_dist\": 85, \"upgrades\": 52, \"modifications\": [3,4,5,6,7,11,13,14]},{\"id\": 1134902, \"itemid\": 517, \"itemname\": \"Aston Martin One-77\",\"nickname\": \"(Uptown, Convict)\", \"races_won\": 259, \"races_entered\": 1418, \"value\": 1556700, \"points_spent\": 311, \"top_speed\": 260, \"upto60\": 3, \"brake_dist\": 78, \"upgrades\": 53, \"modifications\": [3,4,5,6,7,11,13,14]}]}"
		},
		"events":
		{
			"comments": "<ul><li>Add 'stripTags' parameter, allowing the removal of HTML tags from output.</li></ul>",
			"params":
			{
				"stripTags": "TRUE/FALSE"
			},
			"old_api": "{\"events\":{\"1069313063\":{\"timestamp\":1681969296,\"event\":\"Unauthorised has begun renting the Private Island (3,725 happiness) from you for $5,000,000 for 7 days.\",\"seen\":1},\"1069253253\":{\"timestamp\":1681953185,\"event\":\"You finished 5th in the Meltdown race. Your best lap was 00:58.88. [View]\",\"seen\":1},\"1069233040\":{\"timestamp\":1681949307,\"event\":\"Stock dividends from GRN and TCT are now available for withdrawal from the Stock Exchange.\",\"seen\":1}}}",
			"new_api": "{\"events\":[{\"id\": 1069313063, \"timestamp\":1681969296,\"event\":\"Unauthorised has begun renting the Private Island (3,725 happiness) from you for $5,000,000 for 7 days.\",\"seen\":true},{\"id\": 1069253253, \"timestamp\":1681953185,\"event\":\"You finished 5th in the Meltdown race. Your best lap was 00:58.88. [View]\",\"seen\":true},{\"id\": 1069233040, \"timestamp\":1681949307,\"event\":\"Stock dividends from GRN and TCT are now available for withdrawal from the Stock Exchange.\",\"seen\":true}]}"
		},
		"gym":
		{
			"comments": "",
			"old_api": "{\"active_gym\":24}",
			"new_api": "{\"active_gym\":24}"
		},
		"hof":
		{
			"comments": "<ul><li>Remove 'respect' and add 'awards' to line up with in-game HOF page.</li><li>See 'faction => hof' for faction listings.</li></ul>",
			"old_api": "{\"halloffame\":{\"attacks\":{\"value\":13959,\"rank\":2188},\"battlestats\":{\"value\":7067921988,\"rank\":1325},\"busts\":{\"value\":3515,\"rank\":1800},\"defends\":{\"value\":272,\"rank\":14462},\"networth\":{\"value\":31964793157,\"rank\":2775},\"offences\":{\"value\":78099,\"rank\":1810},\"revives\":{\"value\":22,\"rank\":21031},\"traveltime\":{\"value\":12164995,\"rank\":16352},\"workstats\":{\"value\":493293,\"rank\":12401},\"level\":{\"value\":100,\"rank\":1635},\"rank\":{\"value\":26,\"rank\":1623},\"respect\":{\"value\":8022514,\"rank\":37}}}",
			"new_api": "{\"halloffame\":{\"attacks\":{\"value\":13959,\"rank\":2188},\"battlestats\":{\"value\":7067921988,\"rank\":1325},\"busts\":{\"value\":3515,\"rank\":1800},\"defends\":{\"value\":272,\"rank\":14462},\"networth\":{\"value\":31964793157,\"rank\":2775},\"offences\":{\"value\":78099,\"rank\":1810},\"revives\":{\"value\":22,\"rank\":21031},\"traveltime\":{\"value\":12164995,\"rank\":16352},\"workstats\":{\"value\":493293,\"rank\":12401},\"level\":{\"value\":100,\"rank\":1635},\"rank\":{\"value\":26,\"rank\":1623},\"awards\":{\"value\":491,\"rank\":1178}}}"
		},
		"honors":
		{
			"comments": "<ul><li>Wrap the response in 'honors' object</li><li>Pair 'honors_awarded' and 'honors_time' together into an object.</li><li>Add 'criteria' field when unlocked through different method (such as Token Shop).</li></ul>",
			"old_api": "{\"honors_awarded\":[1,2,3,4,5,6,7,8,9,10],\"honors_time\":[1443337793,1523432254,1482923508,1307001900,1533550266,1518132969,1533516271,1523259375,1474827653,1506466013]}",
			"new_api": "{\"honors\":{\"1\": {\"awarded\": 1443337793}, \"2\": {\"awarded\": 1523432254}, \"3\": {\"awarded\": 1482923508}, \"4\": {\"awarded\": 1307001900},\"5\": {\"awarded\": 1533550266},\"6\": {\"awarded\": 1518132969},\"7\": {\"awarded\": 1533516271},\"8\":{\"awarded\": 1523259375},\"9\":{\"awarded\": 1474827653},\"10\":{\"awarded\": 1506466013, \"criteria\": \"Unlocked through the Token Shop.\"}}}"
		},
		"icons":
		{
			"comments": "",
			"old_api": "{\"icons\":{\"icon5\":\"Level 100\",\"icon6\":\"Male\",\"icon4\":\"Subscriber - Donator status: 155 days - Subscriber until: 05/05/23\",\"icon10\":\"Player Committee - Member\",\"icon8\":\"Married - To Beddog\",\"icon27\":\"Company - Attorney of Jux @ Law (Law Firm)\",\"icon9\":\"Faction - Step Sibling of JUX HQ\",\"icon29\":\"Bank Investment - Current bank investment worth $2,390,400,000 - 69 days, 14 hours, 54 minutes and 8 seconds\",\"icon32\":\"Property Vault - $523,000,000 stored in your property vault\",\"icon38\":\"Stock Market - You own shares in the stock market\",\"icon17\":\"Racing - Waiting for a race to start - 0 days, 0 hours, 13 minutes and 16 seconds\",\"icon85\":\"Organized Crime - Political Assassination - 7 days, 12 hours, 46 minutes and 29 seconds\",\"icon47\":\"Medical Cooldown - 05:40:46 / 06:00:00\",\"icon43\":\"Booster Cooldown - 27:41:02 / 48:00:00\",\"icon49\":\"Drug Cooldown - Under the influence of Cannabis - 0 days, 0 hours, 7 minutes and 36 seconds\",\"icon57\":\"Minor Drug Addiction - Your battle stats in combat are slightly reduced (-4%)\"}}",
			"new_api": "{\"icons\":{\"icon5\":\"Level 100\",\"icon6\":\"Male\",\"icon4\":\"Subscriber - Donator status: 155 days - Subscriber until: 05/05/23\",\"icon10\":\"Player Committee - Member\",\"icon8\":\"Married - To Beddog\",\"icon27\":\"Company - Attorney of Jux @ Law (Law Firm)\",\"icon9\":\"Faction - Step Sibling of JUX HQ\",\"icon29\":\"Bank Investment - Current bank investment worth $2,390,400,000 - 69 days, 14 hours, 54 minutes and 8 seconds\",\"icon32\":\"Property Vault - $523,000,000 stored in your property vault\",\"icon38\":\"Stock Market - You own shares in the stock market\",\"icon17\":\"Racing - Waiting for a race to start - 0 days, 0 hours, 13 minutes and 16 seconds\",\"icon85\":\"Organized Crime - Political Assassination - 7 days, 12 hours, 46 minutes and 29 seconds\",\"icon47\":\"Medical Cooldown - 05:40:46 / 06:00:00\",\"icon43\":\"Booster Cooldown - 27:41:02 / 48:00:00\",\"icon49\":\"Drug Cooldown - Under the influence of Cannabis - 0 days, 0 hours, 7 minutes and 36 seconds\",\"icon57\":\"Minor Drug Addiction - Your battle stats in combat are slightly reduced (-4%)\"}}"
		},
		"inventory":
		{
			"comments": "<ul><li>Use boolean for 'equipped' field.</li><li>Change 'ID' and 'UID' to lowercase.</li></ul>",
			"old_api": "{\"inventory\":[{\"ID\":26,\"UID\":7545145762,\"name\":\"AK-47\",\"type\":\"Primary\",\"equipped\":0,\"market_price\":11254,\"quantity\":1},{\"ID\":484,\"UID\":8856213941,\"name\":\"AK74U\",\"type\":\"Primary\",\"equipped\":0,\"market_price\":9163,\"quantity\":1},{\"ID\":570,\"name\":\"Advanced Driving Manual\",\"type\":\"Enhancer\",\"equipped\":0,\"market_price\":284544,\"quantity\":2}]}",
			"new_api": "{\"inventory\":[{\"id\":26,\"uid\":7545145762,\"name\":\"AK-47\",\"type\":\"Primary\",\"equipped\":false,\"market_price\":11254,\"quantity\":1},{\"id\":484,\"uid\":8856213941,\"name\":\"AK74U\",\"type\":\"Primary\",\"equipped\":false,\"market_price\":9163,\"quantity\":1},{\"id\":570,\"name\":\"Advanced Driving Manual\",\"type\":\"Enhancer\",\"equipped\":false,\"market_price\":284544,\"quantity\":2}]}"
		},
		"jobpoints":
		{
			"comments": "",
			"old_api": "{\"jobpoints\":{\"jobs\":{\"medical\":5,\"law\":3,\"grocer\":5},\"companies\":{\"2\":{\"name\":\"Law Firm\",\"jobpoints\":4711},\"16\":{\"name\":\"Television Network\",\"jobpoints\":4}}}}",
			"new_api": "{\"jobpoints\":{\"jobs\":{\"medical\":5,\"law\":3,\"grocer\":5},\"companies\":{\"2\":{\"name\":\"Law Firm\",\"jobpoints\":4711},\"16\":{\"name\":\"Television Network\",\"jobpoints\":4}}}}"
		},
		"log":
		{
			"comments": "",
			"params":
			{
				"to": "end time",
				"from": "start time",
				"log": "ID for log (accepts [,] seperated list)",
				"cat": "ID for log category"
			},
			"old_api": "{\"log\":{\"kYLdlYVdFiq7ZVcHFGAx\":{\"log\":5544,\"title\":\"Stock special withdrawal ready\",\"timestamp\":1682035731,\"category\":\"Stocks\",\"data\":{\"stock\":5},\"params\":{\"italic\":1,\"color\":\"green\"}},\"AUstnXOnlRP9QksjdEtd\":{\"log\":2200,\"title\":\"Item use cannabis\",\"timestamp\":1682033382,\"category\":\"Drugs\",\"data\":{\"item\":196,\"faction\":0,\"nerve_increased\":6},\"params\":{\"color\":\"green\"}},\"eMP9QfuPXJzWJa0WhdB3\":{\"log\":8731,\"title\":\"Racing finish official race\",\"timestamp\":1682030345,\"category\":\"Racing\",\"data\":{\"car\":78,\"race_id\":9410297,\"track\":15,\"position\":\"6th\",\"racing_points\":\"0 racing points\"},\"params\":{\"italic\":1}}}}",
			"new_api": "{\"log\":{\"kYLdlYVdFiq7ZVcHFGAx\":{\"log\":5544,\"title\":\"Stock special withdrawal ready\",\"timestamp\":1682035731,\"category\":\"Stocks\",\"data\":{\"stock\":5},\"params\":{\"italic\":1,\"color\":\"green\"}},\"AUstnXOnlRP9QksjdEtd\":{\"log\":2200,\"title\":\"Item use cannabis\",\"timestamp\":1682033382,\"category\":\"Drugs\",\"data\":{\"item\":196,\"faction\":0,\"nerve_increased\":6},\"params\":{\"color\":\"green\"}},\"eMP9QfuPXJzWJa0WhdB3\":{\"log\":8731,\"title\":\"Racing finish official race\",\"timestamp\":1682030345,\"category\":\"Racing\",\"data\":{\"car\":78,\"race_id\":9410297,\"track\":15,\"position\":\"6th\",\"racing_points\":\"0 racing points\"},\"params\":{\"italic\":1}}}}"
		},
		"medals":
		{
			"comments": "<ul><li>Wrap the response in 'medals' object.</li><li>Pair 'medals_awarded' and 'medals_time' together into an object.</li></ul>",
			"old_api": "{\"medals_awarded\":[1,2,3,4,5,6,7,8,9,10], \"medals_time\":[1277535660,1277535660,1277625000,1279261020,1280610120,1284997680,1310201340,1324129860,1328855640,1331586000]}",
			"new_api": "{\"medals\": {\"1\": {\"awarded\": 1277535660},\"2\": {\"awarded\":1277535660},\"3\": {\"awarded\": 1277625000},\"4\": {\"awarded\": 1279261020},\"5\": {\"awarded\": 1280610120},\"6\": {\"awarded\": 1284997680},\"7\":{\"awarded\": 1310201340},\"8\": {\"awarded\":1324129860},\"9\": {\"awarded\": 1328855640},\"10\": {\"awarded\": 1331586000}}}"
		},
		"merits":
		{
			"comments": "<ul><li>Add 'reset' object containing the 'cost' and 'free-remaining' fields.</li></ul>",
			"old_api": "{\"merits\":{\"Nerve Bar\":0,\"Critical Hit Rate\":10,\"Life Points\":10,\"Crime XP\":6,\"Education Length\":0,\"Awareness\":5,\"Bank Interest\":10,\"Masterful Looting\":0,\"Stealth\":0,\"Hospitalizing\":0,\"Addiction Mitigation\":9,\"Employee Effectiveness\":3,\"Brawn\":10,\"Protection\":10,\"Sharpness\":10,\"Evasion\":10,\"Heavy Artillery Mastery\":0,\"Machine Gun Mastery\":0,\"Rifle Mastery\":6,\"SMG Mastery\":0,\"Shotgun Mastery\":0,\"Pistol Mastery\":0,\"Club Mastery\":0,\"Piercing Mastery\":0,\"Slashing Mastery\":3,\"Mechanical Mastery\":0,\"Temporary Mastery\":0}}",
			"new_api": "{\"merits\":{\"upgrades\":{\"Nerve Bar\":0,\"Critical Hit Rate\":10,\"Life Points\":10,\"Crime XP\":6,\"Education Length\":0,\"Awareness\":5,\"Bank Interest\":10,\"Masterful Looting\":0,\"Stealth\":0,\"Hospitalizing\":0,\"Addiction Mitigation\":9,\"Employee Effectiveness\":3,\"Brawn\":10,\"Protection\":10,\"Sharpness\":10,\"Evasion\":10,\"Heavy Artillery Mastery\":0,\"Machine Gun Mastery\":0,\"Rifle Mastery\":6,\"SMG Mastery\":0,\"Shotgun Mastery\":0,\"Pistol Mastery\":0,\"Club Mastery\":0,\"Piercing Mastery\":0,\"Slashing Mastery\":3,\"Mechanical Mastery\":0,\"Temporary Mastery\":0}, \"reset\": {\"cost\": 250, \"free-remaining\": 7}}}"
		},
		"messages":
		{
			"comments": "<ul><li>Use boolean for 'seen' and 'read'.</li><li>Move sender data into 'sender' object, rename 'ID' to 'id' and 'name' to 'username'.</li><li>Switch from an object to an array</li></ul>",
			"old_api": "{\"messages\":{\"237089911\":{\"timestamp\":1681848610,\"ID\":1900418,\"name\":\"Dolfwagos\",\"type\":\"Faction newsletter\",\"title\":\"420 Event\",\"seen\":1,\"read\":1}},\"236967402\":{\"timestamp\":1681472076,\"ID\":2755308,\"name\":\"SLASH_666\",\"type\":\"User message\",\"title\":\"Rental P.I.\",\"seen\":1,\"read\":1}}",
			"new_api": "{\"messages\":[{\"id\": 237089911, \"timestamp\":1681848610,\"sender\": {\"id\":1900418,\"username\":\"Dolfwagos\"},\"type\":\"Faction newsletter\",\"title\":\"420 Event\",\"seen\":true,\"read\":true},{\"id\": 236967402, \"timestamp\":1681472076,\"sender\": {\"id\":2755308,\"username\":\"SLASH_666\"},\"type\":\"User message\",\"title\":\"Rental P.I.\",\"seen\":true,\"read\":true}]}"
		},
		"missions":
		{
			"comments": "<ul><li>Replace 'status' with 'started' (timestamp), 'ended' (timestamp) and 'success' (boolean) fields.</li><li>Add 'reward' object containing 'money' and 'credits' fields.</li></ul>",
			"old_api": "{\"missions\":{\"Duke\":[{\"title\":\"Scammer\",\"status\":\"completed\"},{\"title\":\"Marriage Counseling\",\"status\":\"completed\"},{\"title\":\"Withdrawal\",\"status\":\"notAccepted\"},{\"title\":\"A Good Day To Get Hard\",\"status\":\"failed\"}]}}",
			"new_api": "{\"missions\":{\"Duke\":[{\"title\":\"Scammer\", \"started\": 1681472076, \"ended\": 1681473191, \"success\": true, \"reward\": {\"money\": 27800, \"credits\": 28}},{\"title\":\"Marriage Counseling\",\"started\": 1681472094, \"ended\": 1681472187, \"success\": true, \"reward\": {\"money\": \"14500\", \"credits\": 42}},{\"title\":\"Withdrawal\",\"started\": 0, \"ended\": 0, \"success\": false, \"reward\": {\"money\": 0, \"credits\": 0}},{\"title\":\"A Good Day To Get Hard\",\"started\": 1681473884, \"ended\": 1681489176, \"success\": false, \"reward\": {\"money\": 0, \"credits\": 0}}]}}"
		},
		"money":
		{
			"comments": "<ul><li>Replace 'time_left' with 'time_start' and 'time_end', using timestamps instead of relative times.</li><li>Wrap the response in 'money' object, remove prefixes.</li><li>Add 'faction_balance' objet with 'money' and 'points' fields.</li></ul>",
			"old_api": "{\"points\":12780,\"cayman_bank\":0,\"vault_amount\":523000000,\"company_funds\":0,\"daily_networth\":31964793157,\"money_onhand\":5195,\"city_bank\":{\"amount\":2390400000,\"time_left\":6010811}}",
			"new_api": "{\"money\": {\"points\":12780,\"cayman_bank\":0,\"vault\":523000000,\"company_funds\":0,\"daily_networth\":31964793157,\"onhand\":5195,\"city_bank\":{\"amount\":2390400000,\"time_start\": 1681457671,\"time_end\":1687979293}, \"faction_balance\": {\"money\": 741000000, \"points\":0}}}"
		},
		"networth":
		{
			"comments": "<ul><li>Remove 'parsetime' field.</li><li>Rename 'items' to 'inventory'.</li></ul>",
			"old_api": "{\"networth\":{\"pending\":0,\"wallet\":22259,\"bank\":2390400000,\"points\":608979780,\"cayman\":0,\"vault\":523000000,\"piggybank\":0,\"items\":4337594348,\"displaycase\":1542028126,\"bazaar\":0,\"itemmarket\":0,\"properties\":8604660000,\"stockmarket\":13885457000,\"auctionhouse\":0,\"company\":0,\"bookie\":314,\"enlistedcars\":3052562,\"loan\":0,\"unpaidfees\":-3768203,\"total\":31891426186,\"parsetime\":0.05049896240234375}}",
			"new_api": "{\"networth\":{\"pending\":0,\"wallet\":22259,\"bank\":2390400000,\"points\":608979780,\"cayman\":0,\"vault\":523000000,\"piggybank\":0,\"inventory\":4337594348,\"displaycase\":1542028126,\"bazaar\":0,\"itemmarket\":0,\"properties\":8604660000,\"stockmarket\":13885457000,\"auctionhouse\":0,\"company\":0,\"bookie\":314,\"enlistedcars\":3052562,\"loan\":0,\"unpaidfees\":-3768203,\"total\":31891426186}}"
		},
		"notifications":
		{
			"comments": "",
			"old_api": "{\"notifications\":{\"messages\":0,\"events\":2,\"awards\":0,\"competition\":0}}",
			"new_api": "{\"notifications\":{\"messages\":0,\"events\":2,\"awards\":0,\"competition\":0}}"
		},
		"perks":
		{
			"comments": "<ul><li>Split company and job perks.</li><li>Wrap response in 'perks' object and remove suffix.</li></ul>",
			"old_api": "{\"faction_perks\":[\"+ 2% passive crime XP\",\"+ 40 maximum nerve\"],\"company_perks\":[\"+ 50% bail cost reduction\",\"+ Ability to revive\"],\"property_perks\":[\"+ Access to airstrip\",\"+ 1% life regeneration\"],\"education_perks\":[\"+ Company advertising effectiveness\",\"+ Employee working stats\"],\"enhancer_perks\":[\"+ Arson success rate (Wind Proof Lighter)\",\"+ Search for cash success rate (Pair of Glasses)\"],\"book_perks\":[],\"stock_perks\":[],\"merit_perks\":[\"+ 5% critical hit rate\",\"+ 100% awareness\"]}",
			"new_api": "{\"perks\": {\"faction\":[\"+ 2% passive crime XP\",\"+ 40 maximum nerve\"],\"company\":[\"+ 50% bail cost reduction\",\"+ Easier to bust more people at once\",\"+ 20% organised crime skill\"], \"job\":[\"+ Ability to revive\",\"+ 10% course time reduction\"],\"property\":[\"+ Access to airstrip\",\"+ 1% life regeneration\"],\"education\":[\"+ Company advertising effectiveness\",\"+ Employee working stats\"],\"enhancer\":[\"+ Arson success rate (Wind Proof Lighter)\",\"+ Search for cash success rate (Pair of Glasses)\"],\"book\":[],\"stock\":[],\"merit\":[\"+ 5% critical hit rate\",\"+ 100% awareness\"]}}"
		},
		"personalstats":
		{
			"comments": "",
			"old_api": "{\"personalstats\":{\"bazaarcustomers\":2666,\"bazaarsales\":72490,\"bazaarprofit\":9687037011,\"useractivity\":13749322,\"activestreak\":961,\"bestactivestreak\":961,\"itemsbought\":789,\"pointsbought\":52610,\"itemsboughtabroad\":26089,\"moneyinvested\":79477061503,\"investedprofit\":9343018865,\"weaponsbought\":14,\"trades\":26}}",
			"new_api": "{\"personalstats\":{\"bazaarcustomers\":2666,\"bazaarsales\":72490,\"bazaarprofit\":9687037011,\"useractivity\":13749322,\"activestreak\":961,\"bestactivestreak\":961,\"itemsbought\":789,\"pointsbought\":52610,\"itemsboughtabroad\":26089,\"moneyinvested\":79477061503,\"investedprofit\":9343018865,\"weaponsbought\":14,\"trades\":26}}"
		},
		"profile":
		{
			"comments": "<ul><li>Add 'flight_type' to 'states' object, showing the kind of plane being used (private, WLT, business).</li><li>Use boolean for 'revivable' and 'donator'.</li><li>Create 'revive' object that includes 'setting' for (everyone, friends/faction and no-one).</li><li>Use timestamps for 'life' and 'signup' instead of relative time remaining.</li><li>Wrap response in 'profile' object.</li><li>Add 'profile_img' which supplies the URL to the current profile image.</li><li>Change 'name' to 'username'.</li><li>Remove 'faction' prefix from 'faction' object.</li></ul>",
			"old_api": "{\"rank\":\"Elite Hired Gun\",\"level\":100,\"gender\":\"Male\",\"property\":\"Private Island\",\"signup\":\"2010-06-23 21:34:48\",\"awards\":491,\"friends\":52,\"enemies\":31,\"forum_posts\":3117,\"karma\":6364,\"age\":4683,\"role\":\"Committee\",\"donator\":1,\"player_id\":1455582,\"name\":\"Bug\",\"property_id\":1388881,\"competition\":null,\"revivable\":0,\"life\":{\"current\":7500,\"maximum\":7500,\"increment\":450,\"interval\":300,\"ticktime\":261,\"fulltime\":0},\"status\":{\"description\":\"Okay\",\"details\":\"\",\"state\":\"Okay\",\"color\":\"green\",\"until\":0},\"job\":{\"position\":\"Employee\",\"company_id\":86818,\"company_name\":\"Jux @ Law\",\"company_type\":2},\"faction\":{\"position\":\"Step Sibling\",\"faction_id\":8989,\"days_in_faction\":1759,\"faction_name\":\"JUX HQ\",\"faction_tag\":\"JUX\"},\"married\":{\"spouse_id\":2101959,\"spouse_name\":\"Beddog\",\"duration\":1894},\"basicicons\":{\"icon5\":\"Level 100\",\"icon6\":\"Male\",\"icon4\":\"Subscriber\",\"icon10\":\"Player Committee - Member\",\"icon8\":\"Married - To Beddog\",\"icon27\":\"Company - Attorney of Jux @ Law (Law Firm)\",\"icon9\":\"Faction - Step Sibling of JUX HQ\"},\"states\":{\"hospital_timestamp\":0,\"jail_timestamp\":0},\"last_action\":{\"status\":\"Online\",\"timestamp\":1681980889,\"relative\":\"0 minutes ago\"}}",
			"new_api": "{\"profile\": {\"rank\":\"Elite Hired Gun\",\"level\":100,\"gender\":\"Male\",\"property\":\"Private Island\",\"signup\":1277328888,\"awards\":491,\"friends\":52,\"enemies\":31,\"forum_posts\":3117,\"karma\":6364,\"age\":4683,\"role\":\"Committee\",\"donator\":true,\"player_id\":1455582,\"username\":\"Bug\",\"property_id\":1388881,\"competition\":null, \"profile_img\": \"https://profileimages.torn.com/65649b42-5600-4c0d-1455582.gif\",\"revive\": {\"setting\": 0, \"revivable\":false},\"life\":{\"current\":7500,\"maximum\":7500,\"increment\":450,\"interval\":300,\"ticktimestamp\":1681968600,\"fulltimestamp\":0},\"status\":{\"description\":\"Okay\",\"details\":\"\",\"state\":\"Okay\",\"color\":\"green\",\"until\":0},\"job\":{\"position\":\"Employee\",\"company_id\":86818,\"company_name\":\"Jux @ Law\",\"company_type\":2},\"faction\":{\"position\":\"Step Sibling\",\"id\":8989,\"days\":1759,\"name\":\"JUX HQ\",\"tag\":\"JUX\"},\"married\":{\"spouse_id\":2101959,\"spouse_name\":\"Beddog\",\"duration\":1894},\"basicicons\":{\"icon5\":\"Level 100\",\"icon6\":\"Male\",\"icon4\":\"Subscriber\",\"icon10\":\"Player Committee - Member\",\"icon8\":\"Married - To Beddog\",\"icon27\":\"Company - Attorney of Jux @ Law (Law Firm)\",\"icon9\":\"Faction - Step Sibling of JUX HQ\"},\"states\":{\"hospital_timestamp\":0,\"jail_timestamp\":0, \"flight_type\": null},\"last_action\":{\"status\":\"Online\",\"timestamp\":1681980889,\"relative\":\"0 minutes ago\"}}}"
		},
		"properties":
		{
			"comments": "<ul><li>Convert object to array.</li><li>Create an 'owner' object with 'id' and 'username' fields.</li></ul>",
			"old_api": "{\"properties\":{\"1388881\":{\"owner_id\":1455582,\"property_type\":13,\"property\":\"Private Island\",\"status\":\"Owned by them\",\"happy\":5025,\"upkeep\":100000,\"staff_cost\":252500,\"cost\":500000000,\"marketprice\":1952788000,\"modifications\":{\"interior\":2,\"hot_tub\":1,\"sauna\":1,\"pool\":3,\"open_bar\":1,\"shooting_range\":1,\"vault\":4,\"medical_facility\":1,\"airstrip\":1,\"yacht\":1},\"staff\":{\"maid\":4,\"guard\":5,\"pilot\":1,\"butler\":3,\"doctor\":1},\"rented\":null},\"2159227\":{\"owner_id\":1455582,\"property_type\":13,\"property\":\"Private Island\",\"status\":\"Owned by them\",\"happy\":3775,\"upkeep\":100000,\"staff_cost\":30000,\"cost\":500000000,\"marketprice\":1057788000,\"modifications\":{\"interior\":2,\"hot_tub\":1,\"sauna\":1,\"pool\":3,\"open_bar\":1,\"shooting_range\":1,\"vault\":4,\"medical_facility\":1,\"airstrip\":1,\"yacht\":0},\"staff\":{\"maid\":0,\"guard\":0,\"pilot\":1,\"butler\":0,\"doctor\":0},\"rented\":{\"user_id\":2687393,\"days_left\":5,\"total_cost\":5000000,\"cost_per_day\":714286}}}}",
			"new_api": "{\"properties\":[{\"id\": 1388881,\"property_type\":13,\"property\":\"Private Island\", \"owner\": {\"id\":1455582, \"username\": \"Bug\"},\"status\":\"Owned by them\",\"happy\":5025,\"upkeep\":100000,\"staff_cost\":252500,\"cost\":500000000,\"marketprice\":1952788000,\"modifications\":{\"interior\":2,\"hot_tub\":1,\"sauna\":1,\"pool\":3,\"open_bar\":1,\"shooting_range\":1,\"vault\":4,\"medical_facility\":1,\"airstrip\":1,\"yacht\":1},\"staff\":{\"maid\":4,\"guard\":5,\"pilot\":1,\"butler\":3,\"doctor\":1},\"rented\":null},{\"id\": 2159227, \"property_type\":13,\"property\":\"Private Island\", \"owner\": {\"id\":1455582, \"username\": \"Bug\"},\"status\":\"Owned by them\",\"happy\":3775,\"upkeep\":100000,\"staff_cost\":30000,\"cost\":500000000,\"marketprice\":1057788000,\"modifications\":{\"interior\":2,\"hot_tub\":1,\"sauna\":1,\"pool\":3,\"open_bar\":1,\"shooting_range\":1,\"vault\":4,\"medical_facility\":1,\"airstrip\":1,\"yacht\":0},\"staff\":{\"maid\":0,\"guard\":0,\"pilot\":1,\"butler\":0,\"doctor\":0},\"rented\":{\"user_id\":2687393,\"days_left\":5,\"total_cost\":5000000,\"cost_per_day\":714286}}]}"
		},
		"publicstatus":
		{
			"comments": "What is this even used for? Suggest deletion, otherwise: <ul><li>Fix typo, 'baned' to 'banned'.</li><li>Change 'playername' to 'username' and 'userID' to 'id'.</li></ul>",
			"old_api": "{\"status\":\"Civilian\",\"userID\":1455582,\"playername\":\"Bug\",\"baned\":false}",
			"new_api": "{\"status\":\"Civilian\",\"id\":1455582,\"username\":\"Bug\",\"banned\":false}"
		},
		"receivedevents":
		{
			"comments": "<ul><li>Convert object to array.</li><li>Create 'sender' objet with 'id' and 'username'.</li><li>Add 'stripTags' parameter, allowing the removal of HTML tags from output.</li></ul>",
			"params":
			{
				"stripTags": "TRUE/FALSE"
			},
			"old_api": "{\"receivedevents\":{\"2205073\":{\"owner\":2577848,\"timestamp\":1602774883,\"event\":\"You were sent $5 from RedHumanoid with the message: 15-14\"},\"2134752\":{\"owner\":148747,\"timestamp\":1595157318,\"event\":\"Bug sent you an event. Please go to your received events to view it.\"},\"2071847\":{\"owner\":258120,\"timestamp\":1589252591,\"event\":\"Bug sent you an event. Please go to your received events to view it.\"}}}",
			"new_api": "{\"receivedevents\":[{\"id\": 2205073, \"sender\":{\"id\": 2577848, \"username\": \"Vrocks\"},\"timestamp\":1602774883,\"event\":\"You were sent $5 from RedHumanoid with the message: 15-14\"},{\"id\": 2134752, \"sender\":{\"id\": 148747, \"username\": \"bogie\"},\"timestamp\":1595157318,\"event\":\"Bug sent you an event. Please go to your received events to view it.\"},{\"id\": 2071847, \"sender\":{\"id\": 258120, \"username\":\"Harley\"},\"timestamp\":1589252591,\"event\":\"Bug sent you an event. Please go to your received events to view it.\"}]}"
		},
		"refills":
		{
			"comments": "<ul><li>Remove 'refills' from field names.</li><li>Wrap daily refills in 'daily' object.</li></ul>",
			"old_api": "{\"refills\":{\"energy_refill_used\":true,\"nerve_refill_used\":false,\"token_refill_used\":false,\"special_refills_available\":0}}",
			"new_api": "{\"refills\":{\"daily\": {\"energy\":true,\"nerve\":false,\"casino\":false},\"special_available\":0}}"
		},
		"reports":
		{
			"comments": "<ul><li>Remove 'user_id' field.</li><li>Convert 'target' to objet with 'id' and 'username'.</li></ul>",
			"old_api": "{\"reports\":[{\"id\":\"641d4c0d653679912006cf28\",\"user_id\": 1455582,\"target\":561164,\"type\":\"stats\",\"report\":{\"strength\":1250210303,\"speed\":766249797,\"dexterity\":253100977,\"defense\":597141944,\"total_battlestats\":2866703021},\"timestamp\":1679641613},{\"id\":\"635ca74dd5eb3e675d0430a4\",\"user_id\": 1455582,\"target\":212324,\"type\":\"stats\",\"report\":{\"strength\":1462870718,\"speed\":1400903739,\"dexterity\":3000600486,\"defense\":27603090},\"timestamp\":1667016525},{\"id\":\"63590bc15f813b823e0eeae4\",\"user_id\":1455582,\"target\":2012107,\"type\":\"stats\",\"report\":{\"strength\":1026493461,\"speed\":610907977,\"dexterity\":1000030629,\"defense\":1462377106,\"total_battlestats\":4099809173},\"timestamp\":1666780097}]}",
			"new_api": "{\"reports\":[{\"id\":\"641d4c0d653679912006cf28\",\"target\":{\"id\": 561164, \"username\": \"swisss\"},\"type\":\"stats\",\"report\":{\"strength\":1250210303,\"speed\":766249797,\"dexterity\":253100977,\"defense\":597141944,\"total_battlestats\":2866703021},\"timestamp\":1679641613},{\"id\":\"635ca74dd5eb3e675d0430a4\",\"target\":{\"id\":212324,\"username\":\"Psihologul\"},\"type\":\"stats\",\"report\":{\"strength\":1462870718,\"speed\":1400903739,\"dexterity\":3000600486,\"defense\":27603090},\"timestamp\":1667016525},{\"id\":\"63590bc15f813b823e0eeae4\",\"target\":{\"id\":2012107, \"username\": \"Lewiss\"},\"type\":\"stats\",\"report\":{\"strength\":1026493461,\"speed\":610907977,\"dexterity\":1000030629,\"defense\":1462377106,\"total_battlestats\":4099809173},\"timestamp\":1666780097}]}"
		},
		"revives":
		{
			"comments": "<ul><li>Convert 'result' (string) into 'success' (boolean).</li><li>Use boolean for 'target_early_discharge'.</li><li>Create 'reviver' and 'target' objects, remove prefixes.</li><li>Convert object to array.</li><li>Add 'stripTags' parameter, allowing the removal of HTML tags from output.</li></ul>",
			"params":
			{
				"stripTags": "TRUE/FALSE"
			},
			"old_api": "{\"revives\":{\"8175407\":{\"timestamp\":1680426411,\"result\": \"success\",\"chance\":98.72,\"reviver_id\":2716211,\"reviver_name\":\"StormTrooper_\",\"reviver_faction\":10960,\"reviver_factionname\":\"Wolverines Health Org\",\"target_id\":1455582,\"target_name\":\"Bug\",\"target_faction\":8989,\"target_factionname\":\"JUX HQ\",\"target_hospital_reason\":\"Overdosed on Xanax\",\"target_early_discharge\":0,\"target_last_action\":{\"status\":\"Online\",\"timestamp\":1680426321}},\"8103500\":{\"timestamp\":1679642681,\"result\": \"success\",\"chance\":92.54,\"reviver_id\":2337207,\"reviver_name\":\"OneEyedTimmy\",\"reviver_faction\":8715,\"reviver_factionname\":\"Midnight X\",\"target_id\":1455582,\"target_name\":\"Bug\",\"target_faction\":8989,\"target_factionname\":\"JUX HQ\",\"target_hospital_reason\":\"Hospitalized by Maikye\",\"target_early_discharge\":0,\"target_last_action\":{\"status\":\"Online\",\"timestamp\":1679642661}}}}",
			"new_api": "{\"revives\":[{\"id\": 8175407, \"timestamp\":1680426411,\"success\":true,\"chance\":98.72,\"reviver\": {\"id\":2716211,\"username\":\"StormTrooper_\",\"faction\":10960,\"factionname\":\"Wolverines Health Org\"},\"target\": {\"id\":1455582,\"username\":\"Bug\",\"faction\":8989,\"factionname\":\"JUX HQ\",\"hospital_reason\":\"Overdosed on Xanax\",\"early_discharge\":false,\"last_action\":{\"status\":\"Online\",\"timestamp\":1680426321}}},{\"id\": 8103500, \"timestamp\":1679642681,\"success\":true,\"chance\":92.54,\"reviver\": {\"id\":2337207,\"username\":\"OneEyedTimmy\",\"faction\":8715,\"factionname\":\"Midnight X\"},\"target\":{\"id\":1455582,\"username\":\"Bug\",\"faction\":8989,\"factionname\":\"JUX HQ\",\"hospital_reason\":\"Hospitalized by Maikye\",\"early_discharge\":false,\"last_action\":{\"status\":\"Online\",\"timestamp\":1679642661}}}]}"
		},
		"revivesfull":
		{
			"comments": "<ul><li>Rename response wrapper to 'revivesfull'.</li><li>Convert 'result' (string) into 'success' (boolean).</li><li>Use boolean for 'target_early_discharge'.</li><li>Create 'reviver' and 'target' objects, remove prefixes.</li><li>Convert object to array.</li><li>Add 'stripTags' parameter, allowing the removal of HTML tags from output.</li></ul>",
			"params":
			{
				"stripTags": "TRUE/FALSE"
			},
			"old_api": "{\"revives\":{\"8175407\":{\"timestamp\":1680426411,\"result\":\"success\",\"chance\":98.72,\"reviver_id\":2716211,\"reviver_faction\":10960,\"target_id\":1455582,\"target_faction\":8989,\"target_hospital_reason\":\"Overdosed on Xanax\",\"target_early_discharge\":0,\"target_last_action\":{\"status\":\"Online\",\"timestamp\":1680426321}},\"8103500\":{\"timestamp\":1679642681,\"result\":\"success\",\"chance\":92.54,\"reviver_id\":2337207,\"reviver_faction\":8715,\"target_id\":1455582,\"target_faction\":8989,\"target_hospital_reason\":\"Hospitalized by Maikye\",\"target_early_discharge\":0,\"target_last_action\":{\"status\":\"Online\",\"timestamp\":1679642661}}}}",
			"new_api": "{\"revivesfull\":[{\"id\": 8175407, \"timestamp\":1680426411,\"success\":true,\"chance\":98.72,\"reviver\": {\"id\":2716211,\"faction\":10960},\"target\": {\"id\":1455582,\"faction\":8989,\"hospital_reason\":\"Overdosed on Xanax\",\"early_discharge\":false,\"last_action\":{\"status\":\"Online\",\"timestamp\":1680426321}}},{\"id\": 8103500, \"timestamp\":1679642681,\"success\":true,\"chance\":92.54,\"reviver\": {\"id\":2337207,\"faction\":8715},\"target\": {\"id\":1455582,\"faction\":8989,\"hospital_reason\":\"Hospitalized by Maikye\",\"early_discharge\":false,\"last_action\":{\"status\":\"Online\",\"timestamp\":1679642661}}}]}"
		},
		"skills":
		{
			"comments": "<ul><li>Wrap the response in 'skills' object.</li><li>Remove 'player_id', this can be fetched elsewhere.</li><li>Expose numbers, not strings.</li></ul>",
			"old_api": "{\"hunting\":\"34.90\",\"racing\":\"25.51\",\"reviving\":\"5.78\",\"player_id\":1455582}",
			"new_api": "{\"skills\": {\"hunting\":34.90,\"racing\":25.51,\"reviving\":5.78}}"
		},
		"stocks":
		{
			"comments": "<ul><li>Remove 'stock_id' field.</li><li>Use boolean for 'ready' field.</li></ul>",
			"old_api": "{\"stocks\":{\"4\":{\"stock_id\":4,\"total_shares\":750000,\"dividend\":{\"ready\":0,\"increment\":1,\"progress\":4,\"frequency\":7},\"transactions\":{\"1412782\":{\"shares\":750000,\"bought_price\":304.19,\"time_bought\":1629075696}}},\"5\":{\"stock_id\":5,\"total_shares\":3000000,\"dividend\":{\"ready\":0,\"increment\":1,\"progress\":0,\"frequency\":31},\"transactions\":{\"893278\":{\"shares\":3000000,\"bought_price\":146.55,\"time_bought\":1623112600}}}}}",
			"new_api": "{\"stocks\":{\"4\":{\"total_shares\":750000,\"dividend\":{\"ready\":false,\"increment\":1,\"progress\":4,\"frequency\":7},\"transactions\":{\"1412782\":{\"shares\":750000,\"bought_price\":304.19,\"time_bought\":1629075696}}},\"5\":{\"total_shares\":3000000,\"dividend\":{\"ready\":false,\"increment\":1,\"progress\":0,\"frequency\":31},\"transactions\":{\"893278\":{\"shares\":3000000,\"bought_price\":146.55,\"time_bought\":1623112600}}}}}"
		},
		"travel":
		{
			"comments": "<ul><li>Remove 'time_left' field.</li><li>Rename 'timestamp' to 'arrival' and 'departed' to 'departure'.</ul></ul>",
			"old_api": "{\"travel\":{\"destination\":\"Torn\",\"method\":\"Airstrip\",\"timestamp\":1681100693,\"departed\":1681093373,\"time_left\":0}}",
			"new_api": "{\"travel\":{\"destination\":\"Torn\",\"method\":\"Airstrip\",\"arrival\":1681100693,\"departure\":1681093373}}"
		},
		"weaponexp":
		{
			"comments": "<ul><li>Convert array to object with 'itemID' as key.</li></ul>",
			"old_api": "{\"weaponexp\":[{\"itemID\":871,\"name\":\"Bug Swatter\",\"exp\":100},{\"itemID\":391,\"name\":\"Macana\",\"exp\":100},{\"itemID\":233,\"name\":\"BT MP9\",\"exp\":84}]}",
			"new_api": "{\"weaponexp\":{\"871\":{\"name\":\"Bug Swatter\",\"exp\":100},\"391\":{\"name\":\"Macana\",\"exp\":100},\"233\":{\"name\":\"BT MP9\",\"exp\":84}}}"
		},
		"workstats":
		{
			"comments": "<ul><li>Wrap the response in 'workstats' object.</li></ul>",
			"old_api": "{\"manual_labor\":84938,\"intelligence\":229660,\"endurance\":178695}",
			"new_api": "{\"workstats\": {\"manual_labor\":84938,\"intelligence\":229660,\"endurance\":178695}}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{\"timestamp\":1681977980}",
			"new_api": "{\"timestamp\":1681977980}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.<ul><li>Rename 'lookup' to 'selections' to align with output.</li><li>Include 'selections' in it's own output.</li></ul>",
			"rename": "user => selections",
			"old_api": "{\"selections\":[\"ammo\",\"attacks\",\"attacksfull\",\"bars\",\"basic\",\"battlestats\",\"bazaar\",\"cooldowns\",\"crimes\",\"discord\",\"display\",\"education\",\"events\",\"gym\",\"hof\",\"honors\",\"icons\",\"inventory\",\"jobpoints\",\"log\",\"medals\",\"merits\",\"messages\",\"missions\",\"money\",\"networth\",\"newevents\",\"newmessages\",\"notifications\",\"perks\",\"personalstats\",\"profile\",\"properties\",\"receivedevents\",\"refills\",\"reports\",\"revives\",\"revivesfull\",\"skills\",\"stocks\",\"timestamp\",\"travel\",\"weaponexp\",\"workstats\"]}",
			"new_api": "{\"lookup\":[\"ammo\",\"attacks\",\"attacksfull\",\"bars\",\"basic\",\"battlestats\",\"bazaar\",\"cooldowns\",\"crimes\",\"discord\",\"display\",\"education\",\"events\",\"gym\",\"hof\",\"honors\",\"icons\",\"inventory\",\"jobpoints\",\"log\",\"medals\",\"merits\",\"messages\",\"missions\",\"money\",\"networth\",\"newevents\",\"newmessages\",\"notifications\",\"perks\",\"personalstats\",\"profile\",\"properties\",\"receivedevents\",\"refills\",\"reports\",\"revives\",\"revivesfull\",\"selections\",\"skills\",\"stocks\",\"timestamp\",\"travel\",\"weaponexp\",\"workstats\"]}"
		}
	},
	"faction":
	{
		"applications":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"armor":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"armorynews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"attacknews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"attacks":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"attacksfull":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"basic":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"boosters":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"cesium":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"chain":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"chains":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"contributors":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"crimeexp":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"crimenews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"crimes":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"currency":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"donations":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"drugs":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"fundsnews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"hof":
		{
			"comments": "New selection 'hof' that lists all faction related HOF rankings.",
			"old_api": "{}",
			"new_api": "{\"halloffame\": {\"respect\":{\"value\":8022514,\"rank\":37}, \"rank\":{\"value\":\"Plat I\",\"rank\":64}, \"chains\":{\"value\":25000,\"rank\":181}}}"
		},
		"mainnews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"medical":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"membershipnews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"positions":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"reports":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"revives":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"revivesfull":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"stats":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"temporary":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"territory":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"territorynews":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"upgrades":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"weapons":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"caches":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.",
			"old_api": "{}",
			"new_api": "{}"
		}
	},
	"company":
	{
		"applications":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"detailed":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"employees":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"news":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"newsfull":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"profile":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"stock":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.",
			"old_api": "{}",
			"new_api": "{}"
		}
	},
	"property":
	{
		"property":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.",
			"old_api": "{}",
			"new_api": "{}"
		}
	},
	"market":
	{
		"bazaar":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"itemmarket":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"pointsmarket":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.",
			"old_api": "{}",
			"new_api": "{}"
		}
	},
	"torn":
	{
		"bank":
		{
			"comments": "",
			"old_api": "{\"bank\":{\"1w\":36.36,\"2w\":39.29,\"1m\":44.99,\"2m\":45.03,\"3m\":50.59}}",
			"new_api": "{\"bank\":{\"1w\":36.36,\"2w\":39.29,\"1m\":44.99,\"2m\":45.03,\"3m\":50.59}}"
		},
		"calendar":
		{
			"comments": "New selection called 'calendar', list all events on the Torn Calendar.",
			"old_api": "{}",
			"new_api": "{\"calendar\": [{\"name\": \"Awareness Awareness Week\", \"description\": \"Increased awareness for one week\", \"start\": 1673780400, \"end\": 1674298800, \"token_rewards\": false}, {\"name\": \"Weekend Road Trip\", \"description\": \"Double racing points & racing skill\", \"start\": 1675378800, \"end\": 1675551600, \"token_rewards\": false}]}"
		},
		"cards":
		{
			"comments": "",
			"old_api": "{\"cards\":{\"1\":{\"name\":\"Two of Spades\",\"short\":2,\"rank\":2,\"class\":\"spades-2\"},\"2\":{\"name\":\"Two of Diamonds\",\"short\":2,\"rank\":2,\"class\":\"diamonds-2\"},\"3\":{\"name\":\"Two of Hearts\",\"short\":2,\"rank\":2,\"class\":\"hearts-2\"},\"4\":{\"name\":\"Two of Clubs\",\"short\":2,\"rank\":2,\"class\":\"clubs-2\"}}}",
			"new_api": "{\"cards\":{\"1\":{\"name\":\"Two of Spades\",\"short\":2,\"rank\":2,\"class\":\"spades-2\"},\"2\":{\"name\":\"Two of Diamonds\",\"short\":2,\"rank\":2,\"class\":\"diamonds-2\"},\"3\":{\"name\":\"Two of Hearts\",\"short\":2,\"rank\":2,\"class\":\"hearts-2\"},\"4\":{\"name\":\"Two of Clubs\",\"short\":2,\"rank\":2,\"class\":\"clubs-2\"}}}"
		},
		"cityshops":
		{
			"comments": "<ul><li>Convert from object to array, remove shop ID.</li></ul>",
			"old_api": "{\"cityshops\":{\"100\":{\"name\":\"Big Al's Gun Shop\",\"inventory\":{\"1\":{\"name\":\"Hammer\",\"type\":\"Melee\",\"price\":75,\"in_stock\":560},\"2\":{\"name\":\"Baseball bat\",\"type\":\"Melee\",\"price\":200,\"in_stock\":617}}}, \"101\": {\"name\":\"Sally's Sweet Shop\",\"inventory\":{\"210\":{\"name\":\"Chocolate Kiss\",\"type\":\"Candy\",\"price\":150,\"in_stock\":162},\"209\":{\"name\":\"Sweet Hearts\",\"type\":\"Candy\",\"price\":500,\"in_stock\":1000}}}}}",
			"new_api": "{\"cityshops\":[{\"name\":\"Big Al's Gun Shop\",\"inventory\":{\"1\":{\"name\":\"Hammer\",\"type\":\"Melee\",\"price\":75,\"in_stock\":560},\"2\":{\"name\":\"Baseball bat\",\"type\":\"Melee\",\"price\":200,\"in_stock\":617}}}, {\"name\":\"Sally's Sweet Shop\",\"inventory\":{\"210\":{\"name\":\"Chocolate Kiss\",\"type\":\"Candy\",\"price\":150,\"in_stock\":162},\"209\":{\"name\":\"Sweet Hearts\",\"type\":\"Candy\",\"price\":500,\"in_stock\":1000}}}]}"
		},
		"companies":
		{
			"comments": "",
			"old_api": "{\"companies\":{\"1\":{\"name\":\"Hair Salon\",\"cost\":750000,\"default_employees\":4,\"positions\":{\"Stylist\":{\"man_required\":1500,\"int_required\":0,\"end_required\":750,\"man_gain\":34,\"int_gain\":0,\"end_gain\":17,\"special_ability\":\"None\",\"description\":\"This person primarily cuts and styles hair, an [..]\"},\"Senior Stylist\":{\"man_required\":3000,\"int_required\":0,\"end_required\":1500,\"man_gain\":39,\"int_gain\":0,\"end_gain\":20,\"special_ability\":\"Manager\",\"description\":\"This position decreases any reduction of [..]\"}},\"stock\":{\"Standard Treatment\":{\"cost\":\"\",\"rrp\":95},\"Full Treatment\":{\"cost\":\"\",\"rrp\":150},\"Luxury Treatment\":{\"cost\":\"\",\"rrp\":350}},\"specials\":{\"Debate\":{\"effect\":\"Experience\",\"cost\":1,\"rating_required\":1},\"Gossip\":{\"effect\":\"View someone's money on hand\",\"cost\":10,\"rating_required\":3},\"Rumors\":{\"effect\":\"2.0 opponent stealth reduction\",\"cost\":0,\"rating_required\":5},\"Cutting Corners\":{\"effect\":\"30 minute education time reduction\",\"cost\":1,\"rating_required\":7},\"Sweeney's Revenge\":{\"effect\":\"20% slashing weapon damage\",\"cost\":0,\"rating_required\":10}}},\"2\":{\"name\":\"Law Firm\",\"cost\":4000000,\"default_employees\":4,\"positions\":{\"Cleaner\":{\"man_required\":5500,\"int_required\":0,\"end_required\":2750,\"man_gain\":44,\"int_gain\":0,\"end_gain\":22,\"special_ability\":\"Cleaner\",\"description\":\"This position increases the cleanliness of the workplace.\"},\"Attorney\":{\"man_required\":0,\"int_required\":11000,\"end_required\":5500,\"man_gain\":0,\"int_gain\":49,\"end_gain\":25,\"special_ability\":\"None\",\"description\":\"This position practices a wide variety of legal [...]\"}},\"stock\":{\"Per Hour\":{\"cost\":\"\",\"rrp\":1500}},\"specials\":{\"Bail Bondsman\":{\"effect\":\"50% bail cost reduction\",\"cost\":0,\"rating_required\":1},\"Background Check\":{\"effect\":\"View someone's stats\",\"cost\":10,\"rating_required\":3},\"Closing Argument\":{\"effect\":\"Easier to bust more people at once\",\"cost\":0,\"rating_required\":5},\"Loophole\":{\"effect\":\"20% organised crime skill\",\"cost\":0,\"rating_required\":7},\"Educated Decisions\":{\"effect\":\"View success chance of potential busts\",\"cost\":0,\"rating_required\":10}}}}}",
			"new_api": "{}"
		},
		"competition":
		{
			"comments": "<ul><li>Add 'active' (boolean), showing if a competition is currently active.</li><li>Add 'upcomming' object with details of next competition.</li></ul>",
			"old_api": "{\"competition\":null}",
			"new_api": "{\"active\": false, \"upcomming\": {\"name\": \"Dog Tags\", \"start\": 1689867463, \"end\": 1691941063}, \"competition\":null}"
		},
		"education":
		{
			"comments": "",
			"old_api": "{\"education\":{\"1\":{\"name\":\"Introduction to Business\",\"description\":\"This is where you'll start your life in the fast moving world of business. Basics will be learnt here.\",\"code\":\"BUS1100\",\"money_cost\":200,\"tier\":1,\"duration\":604800,\"results\":{\"intelligence\":[\"50\"],\"endurance\":[\"10\"]},\"prerequisites\":[]},\"2\":{\"name\":\"Statistics\",\"description\":\"Everything has an outcome. This course will help you to understand the maths and basis behind this.\",\"code\":\"BUS2200\",\"money_cost\":500,\"tier\":2,\"duration\":1209600,\"results\":{\"perk\":[\"Gain 2% productivity for your company\"],\"manual_labor\":[\"5\"],\"intelligence\":[\"60\"],\"endurance\":[\"25\"]},\"prerequisites\":[1]},\"3\":{\"name\":\"Communication\",\"description\":\"In today's world, communication cannot be avoided. Learn how to leave a huge impact with very little words.\",\"code\":\"BUS2300\",\"money_cost\":600,\"tier\":2,\"duration\":1209600,\"results\":{\"perk\":[\"Gain 5% employee effectiveness for your company\"],\"intelligence\":[\"65\"],\"endurance\":[\"20\"]},\"prerequisites\":[1]}}}",
			"new_api": "{}"
		},
		"factiontree":
		{
			"comments": "",
			"old_api": "{\"factiontree\":{\"1\":{\"1\":{\"branch\":\"Core\",\"name\":\"Weapon armory\",\"ability\":\"Unlocks weapon armory\",\"challenge\":\"No challenge\",\"base_cost\":1000}},\"2\":{\"1\":{\"branch\":\"Core\",\"name\":\"Armor armory\",\"ability\":\"Unlocks armor armory\",\"challenge\":\"No challenge\",\"base_cost\":1412}},\"3\":{\"1\":{\"branch\":\"Core\",\"name\":\"Temporary weapon armory\",\"ability\":\"Unlocks temporary weapon armory\",\"challenge\":\"No challenge\",\"base_cost\":3067}},\"4\":{\"1\":{\"branch\":\"Core\",\"name\":\"Medical armory\",\"ability\":\"Unlocks medical item armory\",\"challenge\":\"No challenge\",\"base_cost\":3067}}}}",
			"new_api": "{}"
		},
		"gyms":
		{
			"comments": "",
			"old_api": "{\"gyms\":{\"1\":{\"name\":\"Premier Fitness\",\"stage\":1,\"cost\":10,\"energy\":5,\"strength\":20,\"speed\":20,\"defense\":20,\"dexterity\":20,\"note\":\"\"},\"2\":{\"name\":\"Average Joes\",\"stage\":1,\"cost\":100,\"energy\":5,\"strength\":24,\"speed\":24,\"defense\":27,\"dexterity\":24,\"note\":\"\"},\"3\":{\"name\":\"Woody's Workout Club\",\"stage\":1,\"cost\":250,\"energy\":5,\"strength\":27,\"speed\":32,\"defense\":30,\"dexterity\":27,\"note\":\"\"},\"4\":{\"name\":\"Beach Bods\",\"stage\":1,\"cost\":500,\"energy\":5,\"strength\":32,\"speed\":32,\"defense\":32,\"dexterity\":0,\"note\":\"\"}}}",
			"new_api": "{}"
		},
		"honors":
		{
			"comments": "",
			"old_api": "{\"honors\":{\"1\":{\"name\":\"I'm Watching You\",\"description\":\"Find 50 items in the city\",\"type\":16,\"circulation\":69456,\"equipped\":399,\"rarity\":\"Common\"},\"2\":{\"name\":\"Smokin' Barrels\",\"description\":\"Achieve 5,000 theft crimes\",\"type\":5,\"circulation\":28978,\"equipped\":198,\"rarity\":\"Uncommon\"},\"3\":{\"name\":\"Moneybags\",\"description\":\"Invest $100,000,000 in the stock market\",\"type\":14,\"circulation\":54160,\"equipped\":603,\"rarity\":\"Common\"},\"4\":{\"name\":\"Intern\",\"description\":\"Use 100 job points\",\"type\":0,\"circulation\":115285,\"equipped\":3773,\"rarity\":\"Very Common\"}}}",
			"new_api": "{}"
		},
		"icons":
		{
			"comments": "New selection called 'icons' that lists all possible icons, the default ordering and exclusive groupings.",
			"old_api": "{}",
			"new_api": "{\"icons\":[{\"id\": 1, \"name\": \"Online\", \"order\": 1, \"excludes\": [2]}, {\"id\": 2, \"name\": \"Offline\", \"order\": 3, \"excludes\": [1]}, {\"id\": 3, \"name\": \"Donator\", \"order\": 8, \"excludes\": [4]}, {\"id\": 4, \"name\": \"Subscriber\", \"order\": 9, \"excludes\": [3]}, {\"id\": 5, \"name\": \"Level 100\", \"order\": 13, \"excludes\": []}, {\"id\": 6, \"name\": \"Male\", \"order\": 4, \"excludes\": [7]}, {\"id\": 7, \"name\": \"Female\", \"order\": 5, \"excludes\": [6]}, {\"id\": 8, \"name\": \"Marriage\", \"order\": 12, \"excludes\": []}, {\"id\": 9, \"name\": \"Faction member\", \"order\": 24, \"excludes\": []}, {\"id\": 10, \"name\": \"Committee\", \"order\": 11, \"excludes\": []}, {\"id\": 11, \"name\": \"Staff\", \"order\": 10, \"excludes\": []}, {\"id\": 12, \"name\": \"Low Life\", \"order\": 56, \"excludes\": []}, {\"id\": 13, \"name\": \"Bounty\", \"order\": 48, \"excludes\": []}, {\"id\": 15, \"name\": \"Hospital\", \"order\": 52, \"excludes\": []}]}"
		},
		"items":
		{
			"comments": "",
			"old_api": "{\"items\":{\"1\":{\"name\":\"Hammer\",\"description\":\"A small, lightweight tool used in the building [...]\",\"effect\":\"\",\"requirement\":\"\",\"type\":\"Melee\",\"weapon_type\":\"Clubbing\",\"buy_price\":75,\"sell_price\":50,\"market_value\":102,\"circulation\":1840372,\"image\":\"https://www.torn.com/images/items/1/large.png\"},\"2\":{\"name\":\"Baseball Bat\",\"description\":\"A long, solid wooden bat. As a weapon, it can land [...]\",\"effect\":\"\",\"requirement\":\"\",\"type\":\"Melee\",\"weapon_type\":\"Clubbing\",\"buy_price\":200,\"sell_price\":130,\"market_value\":233,\"circulation\":422406,\"image\":\"https://www.torn.com/images/items/2/large.png\"},\"3\":{\"name\":\"Crowbar\",\"description\":\"Used for opening crates and large boxes. The sharp [...]\",\"effect\":\"\",\"requirement\":\"\",\"type\":\"Melee\",\"weapon_type\":\"Clubbing\",\"buy_price\":400,\"sell_price\":250,\"market_value\":228,\"circulation\":284120,\"image\":\"https://www.torn.com/images/items/3/large.png\"}}}",
			"new_api": "{}"
		},
		"logcategories":
		{
			"comments": "",
			"old_api": "{\"logcategories\":{\"0\":\"Not defined\",\"1\":\"Account creation\",\"2\":\"Authentication\",\"3\":\"Refills\",\"4\":\"Refills incoming\",\"5\":\"Preferences\",\"6\":\"Points\",\"7\":\"Points outgoing\"}}",
			"new_api": "{}"
		},
		"logtypes":
		{
			"comments": "",
			"old_api": "{\"logtypes\":{\"1\":\"Created account\",\"2\":\"Started introduction\",\"3\":\"Finished introduction\",\"101\":\"Successful login\",\"102\":\"Failed login\",\"103\":\"Logout\",\"104\":\"Logout all devices\",\"105\":\"Inactive refills\",\"106\":\"Development server accessed\",\"110\":\"Password reset requested\",\"111\":\"Password reset successful\",\"120\":\"2FA SMS code sent\",\"121\":\"2FA SMS code entry successful\",\"122\":\"2FA SMS code entry failed\",\"123\":\"2FA Secret question entry successful\",\"124\":\"2FA Secret question entry failed\"}}",
			"new_api": "{}"
		},
		"medals":
		{
			"comments": "",
			"old_api": "{\"medals\":{\"1\":{\"name\":\"Beginner\",\"description\":\"Reach the rank of 'Beginner'\",\"type\":\"RNK\",\"circulation\":728617,\"rarity\":\"Very Common\"},\"2\":{\"name\":\"Inexperienced\",\"description\":\"Reach the rank of 'Inexperienced'\",\"type\":\"RNK\",\"circulation\":484813,\"rarity\":\"Very Common\"},\"3\":{\"name\":\"Rookie\",\"description\":\"Reach the rank of 'Rookie'\",\"type\":\"RNK\",\"circulation\":409743,\"rarity\":\"Very Common\"},\"4\":{\"name\":\"Novice\",\"description\":\"Reach the rank of 'Novice'\",\"type\":\"RNK\",\"circulation\":340288,\"rarity\":\"Very Common\"}}}",
			"new_api": "{}"
		},
		"articles":
		{
			"comments": "New selection called 'articles' that lists all newspaper articles.",
			"old_api": "{}",
			"new_api": "{\"articles\": [{\"id\": 2242, \"title\": \"Who Is Torns No.1 Faction?\",\"text\": \"Was Torn Citys number one faction dethroned in the small hours of Monday morning? [...]\",\"image\": \"https://newspaper.torn.com/2242/leadImage/a8c33a46-f7da-4ad7-935e-c20880e603b9/medium.png\",\"published\": 1644524261,\"read\": false,\"author\": {\"id\": 1963573,\"username\": \"sugarvalves\"},\"views\": 1627},{\"articleID\": 2239, \"title\": \"Market Report January\",\"text\": \"VALENTINES DAY LOOMS LARGEnnThe Valentines Day attacking event returns to bathe [...]\",\"image\": \"https://newspaper.torn.com/2239/leadImage/e15117d0-4d8e-417b-8dec-a9d6c8355b74/medium.png\",\"published\": 1644409903,\"read\": false,\"author\": {\"id\": 1963573,\"username\": \"sugarvalves\"},\"views\": 1630}]}"
		},
		"organisedcrimes":
		{
			"comments": "",
			"old_api": "{\"organisedcrimes\":{\"1\":{\"name\":\"Blackmailing\",\"members\":2,\"time\":24,\"min_cash\":6000,\"max_cash\":10000,\"min_respect\":1,\"max_respect\":2},\"2\":{\"name\":\"Kidnapping\",\"members\":2,\"time\":48,\"min_cash\":15000,\"max_cash\":35000,\"min_respect\":3,\"max_respect\":5},\"3\":{\"name\":\"Bomb threat\",\"members\":3,\"time\":72,\"min_cash\":50000,\"max_cash\":150000,\"min_respect\":7,\"max_respect\":10},\"4\":{\"name\":\"Planned robbery\",\"members\":5,\"time\":96,\"min_cash\":400000,\"max_cash\":600000,\"min_respect\":18,\"max_respect\":24},\"5\":{\"name\":\"Robbing of a money train\",\"members\":6,\"time\":120,\"min_cash\":3250000,\"max_cash\":4250000,\"min_respect\":25,\"max_respect\":35},\"6\":{\"name\":\"Taking over a cruise liner\",\"members\":15,\"time\":144,\"min_cash\":17500000,\"max_cash\":27500000,\"min_respect\":65,\"max_respect\":80},\"7\":{\"name\":\"Plane hijacking\",\"members\":8,\"time\":168,\"min_cash\":20000000,\"max_cash\":50000000,\"min_respect\":80,\"max_respect\":100},\"8\":{\"name\":\"Political Assassination\",\"members\":4,\"time\":192,\"min_cash\":100000000,\"max_cash\":300000000,\"min_respect\":200,\"max_respect\":300}}}",
			"new_api": "{}"
		},
		"pawnshop":
		{
			"comments": "",
			"old_api": "{\"pawnshop\":{\"points_value\":45000,\"donatorpack_value\":22650000}}",
			"new_api": "{}"
		},
		"properties":
		{
			"comments": "",
			"old_api": "{\"properties\":{\"1\":{\"name\":\"Trailer\",\"cost\":5000,\"happy\":110,\"upkeep\":10,\"upgrades_available\":[\"Sufficient Interior Modification\",\"Superior Interior Modification\"],\"staff_available\":[]},\"2\":{\"name\":\"Apartment\",\"cost\":25000,\"happy\":125,\"upkeep\":25,\"upgrades_available\":[\"Sufficient Interior Modification\",\"Superior Interior Modification\"],\"staff_available\":[]},\"3\":{\"name\":\"Semi-Detached House\",\"cost\":75000,\"happy\":150,\"upkeep\":70,\"upgrades_available\":[\"Sufficient Interior Modification\",\"Superior Interior Modification\",\"Hot Tub\",\"Sauna\"],\"staff_available\":[]},\"4\":{\"name\":\"Detached House\",\"cost\":300000,\"happy\":200,\"upkeep\":150,\"upgrades_available\":[\"Sufficient Interior Modification\",\"Superior Interior Modification\",\"Hot Tub\",\"Sauna\",\"Small Pool\",\"Medium Pool\",\"Large Pool\"],\"staff_available\":[]},\"5\":{\"name\":\"Beach House\",\"cost\":500000,\"happy\":300,\"upkeep\":200,\"upgrades_available\":[\"Sufficient Interior Modification\",\"Superior Interior Modification\",\"Hot Tub\",\"Sauna\",\"Small Pool\",\"Medium Pool\",\"Large Pool\"],\"staff_available\":[]}}}",
			"new_api": "{}"
		},
		"rackets":
		{
			"comments": "",
			"old_api": "{\"rackets\":{\"HZB\":{\"name\":\"Protection Racket IV\",\"level\":4,\"reward\":\"$40,000,000 daily\",\"created\":1580018223,\"changed\":1681613824,\"faction\":18736},\"TVG\":{\"name\":\"Drug Lab III\",\"level\":3,\"reward\":\"100x Ecstasy daily\",\"created\":1585904224,\"changed\":1679777825,\"faction\":10856},\"NBG\":{\"name\":\"Truck Stop II\",\"level\":2,\"reward\":\"20x Can of Red Cow daily\",\"created\":1586015824,\"changed\":1680951424,\"faction\":16312}}}",
			"new_api": "{}"
		},
		"raids":
		{
			"comments": "",
			"old_api": "{\"raids\":{\"2179\":{\"assaulting_faction\":43664,\"defending_faction\":38909,\"assaulting_score\":437.76,\"defending_score\":0,\"started\":1588546284},\"2393\":{\"assaulting_faction\":45457,\"defending_faction\":41720,\"assaulting_score\":72.23,\"defending_score\":0,\"started\":1593393238},\"2727\":{\"assaulting_faction\":46270,\"defending_faction\":44416,\"assaulting_score\":0,\"defending_score\":0,\"started\":1606202350}}}",
			"new_api": "{}"
		},
		"stats":
		{
			"comments": "<ul><li>Remove 'timestamp' field, can be requested via 'timestamp' selection.</li></ul>",
			"old_api": "{\"stats\":{\"timestamp\":1681948800,\"users_total\":1499162,\"users_male\":1277838,\"users_female\":218244,\"users_enby\":3080,\"users_marriedcouples\":64012,\"users_daily\":41989,\"total_users_logins\":363086323,\"total_users_playtime\":8578,\"job_army\":40904,\"job_grocer\":23213,\"job_medical\":6752,\"job_casino\":25297,\"job_education\":4988,\"job_law\":2373,\"job_company\":50422,\"job_none\":1345213,\"crimes\":1643689165,\"jailed\":40144795,\"money_onhand\":2915859566658,\"money_citybank\":71729537103476,\"items\":1123007189,\"events\":1069584413,\"wars_ranked\":37,\"wars_territory\":17}}",
			"new_api": "{\"stats\":{\"users_total\":1499162,\"users_male\":1277838,\"users_female\":218244,\"users_enby\":3080,\"users_marriedcouples\":64012,\"users_daily\":41989,\"total_users_logins\":363086323,\"total_users_playtime\":8578,\"job_army\":40904,\"job_grocer\":23213,\"job_medical\":6752,\"job_casino\":25297,\"job_education\":4988,\"job_law\":2373,\"job_company\":50422,\"job_none\":1345213,\"crimes\":1643689165,\"jailed\":40144795,\"money_onhand\":2915859566658,\"money_citybank\":71729537103476,\"items\":1123007189,\"events\":1069584413,\"wars_ranked\":37,\"wars_territory\":17}}"
		},
		"stocks":
		{
			"comments": "",
			"old_api": "{\"stocks\":{\"1\":{\"stock_id\":1,\"name\":\"Torn & Shanghai Banking\",\"acronym\":\"TSB\",\"current_price\":1038.71,\"market_cap\":14143281802574,\"total_shares\":13616198749,\"investors\":9642,\"benefit\":{\"type\":\"active\",\"frequency\":31,\"requirement\":3000000,\"description\":\"$50,000,000\"}},\"2\":{\"stock_id\":2,\"name\":\"Torn City Investments\",\"acronym\":\"TCI\",\"current_price\":962.67,\"market_cap\":17025901282769,\"total_shares\":17686124303,\"investors\":15147,\"benefit\":{\"type\":\"passive\",\"frequency\":7,\"requirement\":1500000,\"description\":\"a 10% bank interest bonus\"}}}}",
			"new_api": "{}"
		},
		"territory":
		{
			"comments": "",
			"old_api": "{\"territory\":{\"AAC\":{\"sector\":6,\"size\":4,\"density\":2,\"slots\":28,\"daily_respect\":66,\"faction\":20747,\"coordinate_x\":\"5480.74\",\"coordinate_y\":\"663.71\",\"neighbors\":[\"RAC\",\"YBC\",\"ZBC\",\"UCC\",\"KCC\",\"VDC\",\"TTE\",\"NME\",\"OME\",\"NFG\",\"QFG\"]},\"AAD\":{\"sector\":2,\"size\":3,\"density\":2,\"slots\":17,\"daily_respect\":101,\"faction\":16628,\"coordinate_x\":\"4179.33\",\"coordinate_y\":\"1650.67\",\"neighbors\":[\"RYD\",\"SYD\",\"WZD\",\"NBD\",\"ZAE\"]},\"AAE\":{\"sector\":3,\"size\":4,\"density\":2,\"slots\":27,\"daily_respect\":105,\"faction\":16628,\"coordinate_x\":\"4513.32\",\"coordinate_y\":\"1474.34\",\"neighbors\":[\"XSD\",\"SVD\",\"RXD\",\"MXD\",\"EYD\"]}}}",
			"new_api": "{}"
		},
		"territorywars":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"rankedwards":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"rankedwarreport":
		{
			"comments": "",
			"old_api": "{}",
			"new_api": "{}"
		},
		"timestamp":
		{
			"comments": "",
			"old_api": "{\"timestamp\":1682050551}",
			"new_api": "{\"timestamp\":1682050551}"
		},
		"lookup":
		{
			"comments": "Possibly remove, see 'api => selections'.",
			"old_api": "{}",
			"new_api": "{}"
		}
	},
	"api":
	{
		"selections":
		{
			"comments": "New selection called 'selections', lists all possible selections with their modifiers, access level and if the current key has permission.",
			"old_api": "{}",
			"new_api": "{\"selections\": {\"user\":{\"ammo\":{\"modifiers\": [], \"level\":\"minimal\", \"permission\": true}, \"attacks\":{\"modifiers\": [\"to\", \"from\"], \"level\":\"limited\", \"permission\": true}, \"log\":{\"modifiers\": [\"log\", \"cat\", \"to\", \"from\"], \"level\":\"full\", \"permission\": false}}, \"property\":{\"property\":{\"modifiers\":[], \"level\":\"public\", \"permission\":true}}}}"
		}
	},
	"key":
	{
		"info":
		{
			"comments": "<ul><li>Wrap response in 'key' object.</li></ul>",
			"rename": "api => key",
			"old_api": "{\"access_level\":4,\"access_type\":\"Full Access\",\"selections\":{\"company\":[\"applications\",\"companies\",\"detailed\"],\"faction\":[\"applications\",\"armor\",\"armorynews\"],\"market\":[\"bazaar\",\"itemmarket\",\"pointsmarket\"],\"property\":[\"property\",\"timestamp\",\"lookup\"],\"torn\":[\"bank\",\"cards\",\"chainreport\"],\"user\":[\"ammo\",\"attacks\",\"attacksfull\"],\"key\":[\"info\"]}}",
			"new_api": "{\"key\": {\"access_level\":4,\"access_type\":\"Full Access\",\"selections\":{\"company\":[\"applications\",\"companies\",\"detailed\"],\"faction\":[\"applications\",\"armor\",\"armorynews\"],\"market\":[\"bazaar\",\"itemmarket\",\"pointsmarket\"],\"property\":[\"property\",\"timestamp\",\"lookup\"],\"torn\":[\"bank\",\"cards\",\"chainreport\"],\"user\":[\"ammo\",\"attacks\",\"attacksfull\"],\"api\":[\"key\", \"selections\"]}}}"
		}
	}
};

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


$(function() {
	var outputString = "";

	$.each(apiData, function(category, categoryArr) {
		$.each(categoryArr, function(selection, details) {
			outputString += "<div class='container'><span class='title" + (details.rename ? " rename" : "") + "'>" + category + " => "+  selection + "</span> "+  (details.rename ? "<span class='title'>" + details.rename + "</span>" : "") + "<hr /><span class='comments'>" + details.comments + "</span><hr /><div class='code-block'><pre class='code'>" + details['old_api'] + "</pre><pre class='code'>" + details['new_api'] + "</pre></div>";
			$.each(details.params, function(param, comment) {
				outputString += "<hr /><span class='param'>&" +  param + "</span><span class='param'> = </span><span class='param'>[" + comment + "]</span>";
			});
			outputString += "</div>";
		});
	});

	$("body").append(outputString);

	$(".code").each(function() {
	  if (getUrlParameter('highlight'))
			$(this).html(syntaxHighlight(JSON.stringify(JSON.parse($(this).html()), undefined, 2)));
		else
			$(this).html(JSON.stringify(JSON.parse($(this).html()), undefined, 2));
	});
});
  

function syntaxHighlight(json) {
	json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
		var cls = 'number';
		if (/^"/.test(match)) {
			if (/:$/.test(match)) {
				cls = 'key';
			} else {
				cls = 'string';
			}
		} else if (/true|false/.test(match)) {
			cls = 'boolean';
		} else if (/null/.test(match)) {
			cls = 'null';
		}
		return '<span class="' + cls + '">' + match + '</span>';
	});
}