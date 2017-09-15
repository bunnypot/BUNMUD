const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Mjk3MjI5MDc0Nzc3MTEyNTc2.DJy4eA.afQcGVaOEylvVOSgU1c7p2xwVEE');