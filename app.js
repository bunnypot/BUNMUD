//DISCORD
const Discord = require("discord.js");
global.discord_client = new Discord.Client();
global.discord_client.login(process.env.DISCORD_TOKEN);

//REDIS
const Redis = require("redis");
global.redis_client = Redis.createClient(process.env.REDIS_URL);
global.redis_client.set("pings", 0, Redis.print);

//EVENTS
global.discord_client.on("ready", () => {
    const channel = global.discord_client.channels.get("358044545549598721");
    if (!channel) return;
  	channel.send("```INFO:: grid net started.```");
});

global.discord_client.on('message', msg => {
	if(message.author.id == "297229074777112576") { return; } 

	if (msg.content === "ping") {
		redis_client.get("pings", function (err, reply) {
			redis_client.set("pings", parseInt(reply)+1, Redis.print);
			msg.reply("Pong! ping count is "+(parseInt(reply)+1));
		});
	}
});


//GRID NET CHARACTER
const Character = require("./src/Character/Character.js");
