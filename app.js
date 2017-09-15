//DISCORD
const Discord = require("discord.js");
const discord_client = new Discord.Client();

discord_client.login(process.env.DISCORD_TOKEN);

//REDIS
const Redis = require("redis"),
const redis_client = redis.createClient(process.env.REDIS_URL);

redis_client.set("pings", 0);


//EVENTS
discord_client.on('message', msg => {
	if (msg.content === 'ping') {
		
		redis_client.get("pings", function (err, reply) {
			redis_client.set("pings", reply+1);
			msg.reply('Pong! ping count is '+reply+1);
		});
	}	
});