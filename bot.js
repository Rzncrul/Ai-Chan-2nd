const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
       console.log('i am ready!');
});
Client.on('message', () => {
       if (message.content === 'ping') {
           message.reply('pong');
       }
});

client.login(process.env.BOT_TOKEN);
