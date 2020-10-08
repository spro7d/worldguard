const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
     if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send('You need to `Manage Server` permission.');
      const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('noVoiceChannel', message);
    const permissions = voiceChannel.permissionsFor(message.guild.me).toArray();
    if (!permissions.includes('CONNECT')) return this.client.embed('noPerms-CONNECT', message);
    if (!permissions.includes('SPEAK')) return this.client.embed('noPerms-SPEAK', message);
    voiceChannel.join();
    this.client.embed('summoned', message);

} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['join', 'katıl'],
    permLevel: 3
}

exports.help = {
    name: 'katıl',
    description: '',
    usage: ''
}