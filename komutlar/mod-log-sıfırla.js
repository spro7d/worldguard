
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    return message.channel.send(`:warning: Bu sunucuda daha önceden modlog kanalı ayarlanmamış. Ayarlamak için: \`${prefix}modlog-ayarla <#kanal>\``)
  } else {
    if(modlogs) {    
      db.delete(`modlogkanaly_${message.guild.id}`)
      message.channel.send(`:white_check_mark: Modlog kanalı başarılı bir sıfırlandı!`)
    }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: 'modlog-sıfırla',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}