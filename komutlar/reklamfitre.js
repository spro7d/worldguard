const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(` Lütfen **aç** veya **kapat** Yazmalısın! Örnek: ${ayarlar.prefix}küfür-filtresi aç`).setColor("RED"));
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik') 
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Reklam Engel Başarıyla Açıldı! `Üyeleri Yasakla` Yetkisine Sahip Olanların Reklamı Engellenmicektir.').setColor("RANDOM"));
 
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'kapali') 
     return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' Reklam Filtresi Başarıyla Kapatıldı.').setColor("RANDOM"));
  
  } }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engel'],
  kategori: "ayarlar",
  permLevel: 0
};

exports.help = {
  name: 'reklam-filtre',
  description: 'Reklam Engelleme Sistemini Açar/Kapatır.',
  usage: 'reklam-filtresi <aç/kapat>'
};