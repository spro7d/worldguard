const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async function(bot, message, args) {
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komutu kullanmak için `SUNUCUYU_YÖNET` yetkisine sahip olmalısınız!')
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Lütfen bir kanal etiketle! `!!duyuru-kanal-ayarla #kanal`')
  db.set(`duyuru-kanal_${message.guild.id}`, kanal.id)
    message.channel.send(`Duyuru kanalı başarıyla ${kanal} olarak ayarlandı`)
  }



    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'duyuru-kanal-ayarla',
    description: 'Duyuru kanalını belirler.',
    usage: 'duyuru-kanal-ayarla <#kanal>'
}