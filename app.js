//LIFECYCLE --------------------------------------

//DISCORD
const Discord = require("discord.js");
global.discord_client = new Discord.Client();
global.discord_client.login(process.env.DISCORD_TOKEN);

//REDIS
const Redis = require("redis");
global.redis_client = Redis.createClient(process.env.REDIS_URL);
global.redis_client.set("pings", 0, Redis.print);

//ROLLS
global.DiceExpression = require('dice-expression-evaluator');

//CHARACTER
//const Character = require("./src/Character/Character.js");

//EVENTS --------------------------------------
global.discord_client.on("ready", () => {
    const channel = global.discord_client.channels.get("358044545549598721");
    if (!channel) return;
  	channel.send("`INFO:: grid net started.`");
});

global.discord_client.on('message', msg => {
	msg.author.id == "297229074777112576"

	if (msg.content === "ping") {
		redis_client.get("pings", function (err, reply) {
			redis_client.set("pings", parseInt(reply)+1, Redis.print);
			msg.reply("Pong! ping count is "+(parseInt(reply)+1));
		});
	}

	var commandObject = commandParse(msg.content);
	switch(commandObject.command) {
		case "d": 
			//Rich Embed Dice Roll
			var roll = global.DiceExpression(commandObject.args.join('')).roll();
			var richResult = "";

			if (commandObject.args.join('').indexOf("d6") != -1 && commandObject.args.length == 1) {
				//roll is d6
				roll.diceRaw[0].forEach(function(v, i){
					if (v==1) {richResult += "<:d6_1:363137445774229504>"}
					if (v==2) {richResult += "<:d6_2:363137446629736458>"}
					if (v==3) {richResult += "<:d6_3:363137446541787137>"}
					if (v==4) {richResult += "<:d6_4:363137445706989570>"}
					if (v==5) {richResult += "<:d6_5:363137447275790336>"}
					if (v==6) {richResult += "<:d6_6:363137446487130133>"}
				})
				richResult += " **Result:**  "+roll.roll;
			} else {
				richResult = roll.diceSums.join(",")+"... **Result:**  "+roll.roll;
			}

			dicerollEmbed = {
				"embed": {
					"color": 9118312,
				    "fields": [
				    	{
				        	"name": "Rolling "+commandObject.args.join(""),
				        	"value": richResult
				    	}
				    ]
				}
			}

			msg.channel.send(dicerollEmbed);

			break;
		case "c":
			break;
	}
	
});

//UTIL  --------------------------------------
function commandParse(text) {

	//command validation
	if (text == null || text == "" || text.substr(0,1) != ".") { return false; } 

	//will return object of {"command": command (string) "args": [arguments]}
	//splits by " " and ";"
	if (text.indexOf(";") == -1) {
		var t = text.split(" ");
		if (t.length == 1) {
			return {"command":t.toString().substr(1)};
		} else {
			var c = t.shift();
			return {"command": c.substr(1), "args": t};
		}
	} else {
        var t = text.split(" ");
		var c = t.shift();
		return {"command": c.substr(1), "args": t.join("").split(";")}
	}

}