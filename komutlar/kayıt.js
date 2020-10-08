const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let user = message.member
  let guild = message.guild
  
  let rol = guild.roles.find('name', 'Üye')
  let isim = args[0]
  let yas = args[1]
  
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)
  
  user.setNickname(`${isim} | ${yas}`)
  user.addRole(662328771356917761)
  user.removeRole(662328771356917761)
  message.channel.send(`${message.author} Sunucuya Kaydoldun !`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}