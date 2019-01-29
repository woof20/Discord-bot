const Commando = require('discord.js-commando');

class JoinChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'join',
      group: 'music',
      memberName: 'join',
      description: 'joins a voice channel'
    });
  }

  async run(message, args) {
    if (message.member.voiceChannel) {
      if(!message.guild.voiceConnection) {
        message.member.voiceChannel.join()
          .then(connection =>{
            message.reply('Succefully Joined!');
          })
      }
    }
    else {
      message.reply("You must be in a voice channel to use this command");
    }
  }
}

module.exports = JoinChannelCommand
