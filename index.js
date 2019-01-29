const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTM5OTMwNzYyNDg1NDMyMzIy.DzJjLg.NS27_cWxGkZRJaCszVo43eUmQOs'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', function(message) {
  if (message.content == '!hello') {
    message.channel.sendMessage('hello ' + message.author + ', how are you?');
  }
});

bot.on('ready', function() {
  console.log('ready');
})

bot.login(TOKEN);
