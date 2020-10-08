const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');

exports.run = async (client, message, params) => {  
  
    var konum = ''
        if(message.guild.region === "russia") {
            var konum = 'Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = 'Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = 'Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = 'Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = 'Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = 'Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = 'Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = 'Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = 'Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = 'Orta Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = 'Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = 'Japonya'
        }
  
  
  var tarih = ''
        if(moment(message.guild.createdAt).format('MM') === '01') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/01/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '02') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/02/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '03') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/03/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '04') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/04/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '05') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/05/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '06') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/06/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '07') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/07/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '08') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/08/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '09') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/09/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '10') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/10/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '11') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/11/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
        if(moment(message.guild.createdAt).format('MM') === '12') {
            var tarih = `${moment(message.guild.createdAt).format('DD')}/12/${moment(message.guild.createdAt).format('YYYY HH:mm:ss')} `
        }
  
  let gcKanal = await db.fetch(`gckanal_${message.guild.id}`);
  let gcKanalyazi;
  if (gcKanal == null) gcKanalyazi = 'Ayarlanmamış.'
  else gcKanalyazi = `#${gcKanal}`
  
  let sayacKanal = await db.fetch(`sayacK_${message.guild.id}`);
  let sayacKanalyazi;
  if (sayacKanal == null) sayacKanalyazi = 'Ayarlanmamış.'
  else sayacKanalyazi = `#${sayacKanal}`
  
  let logKanal = await db.fetch(`modlogK_${message.guild.id}`);
  let logKanalyazi;
  if (logKanal == null) logKanalyazi = 'Ayarlanmamış.'
  else logKanalyazi = `#${logKanal}`
  
  let otorol1 = await db.fetch(`otorol_${message.guild.id}`);
  let otorol2;
  if (otorol1 == null) otorol2 = 'Ayarlanmamış.'
  else otorol2 = `${otorol1}`
  
  let otorolK = await db.fetch(`otorol_${message.guild.id}`);
  let otorol;
  if (otorolK == null) otorol = 'Ayarlanmamış.'
  else otorol = `${otorolK}`
  
  
  const sunucubilgi = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name}`, message.guild.iconURL)
  .setColor("ORANGE")
  .addField(`Kullanıcılar [${message.guild.memberCount}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} Aktif | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsız Etmeyin | ${message.guild.members.filter(m => m.user.bot).size} Bot`, true)
  .addField(`Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} yazı, ${message.guild.channels.filter(c => c.type === "voice").size} ses`, true)
  .addField(`Kurucu`, message.guild.owner, true)
  .addField(`Rol Sayısı`, `${message.guild.roles.size}`, true)
  .addField(`Doğrulama Seviyesi`, message.guild.verificationLevel, true)
  .addField(`Sunucu Bölgesi`, konum, true)
  .addField(`Oluşturulma Tarihi`, tarih, true)
  .addField(`ID`,message.guild.id ,true)
  .addField(`Sayaç Kanalı`, sayacKanalyazi, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucunun bilgilerini gönderir.',
  usage: 'sunucubilgi'
};