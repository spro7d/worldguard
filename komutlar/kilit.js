const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setTitle(`${message.guild.name} - Kanal Kilit Sistemi `)
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) {
    
const embedyazı = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - Kanal Kilit Sistemi `)
.setColor('RANDOM')
.setDescription(`**\n \`\`\`❌ Doğru kullanım :: ${ayarlar.prefix}kilit <süre>\`\`\`**\n\n **Süre Örnek ::**\n \n:triangular_flag_on_post:  1s = 1 saniye\n:triangular_flag_on_post:  1m = 1 dakika \n:triangular_flag_on_post:  1h = 1 saat \n:triangular_flag_on_post:  1d = 1 gün\n\n **:warning: Dikkat :: Sadece Komutu Kullanılan Kanal Kilitlenir !** **\n** `)
.setTimestamp()
.setThumbnail("http://www.daxiongmao.eu/wiki/images/3/34/Pki-icon.png")
.setFooter(`Kanalı Kilitleyen Yetkili : ${message.author.username}`, message.author.avatarURL);
return	message.channel.send(embedyazı);
 
  }
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      
const embedyazı = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - Kanal Kilit Sistemi `)
.setColor('RANDOM')
.setDescription(`**\n:white_check_mark: Kanal kilidi açıldı. ** **\n**`)
.setTimestamp()
.setThumbnail("http://www.daxiongmao.eu/wiki/images/3/34/Pki-icon.png")
.setFooter(`Kanalı Kilitleyen Yetkili : ${message.author.username}`, message.author.avatarURL);
return	message.channel.send(embedyazı);
      
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
const embedyazı = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - Kanal Kilit Sistemi `)
.setColor('RANDOM')
.setDescription(`**\n:white_check_mark: Kanal kilitlendi. Süre :: ${ms(ms(time), { long:true })} ⏳** **\n**`)
.setTimestamp()
.setThumbnail("http://www.daxiongmao.eu/wiki/images/3/34/Pki-icon.png")
.setFooter(`Kanalı Kilitleyen Yetkili : ${message.author.username}`, message.author.avatarURL);
return	message.channel.send(embedyazı).then(() => {


        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          })
            
const embedyazı = new Discord.RichEmbed()
.setTitle(`${message.guild.name} - Kanal Kilit Sistemi `)
.setColor('RANDOM')
.setDescription(`**\n:white_check_mark: Kanalın kilidi açıldı.\n\nTekrar Kilitlemek İçin :: \`\`\`💡 ${ayarlar.prefix}kilit <süre örneğin: 2 min>\`\`\`**  **\n**`)
.setTimestamp()
.setThumbnail("http://www.daxiongmao.eu/wiki/images/3/34/Pki-icon.png")
.setFooter(`Kanalı Kilitleyen Yetkili : ${message.author.username}`, message.author.avatarURL);
return	message.channel.send(embedyazı).then().catch(console.error);
          
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalk'],
  permLevel: 0
};

exports.help = {
  name: 'kilit',
  description: 'Komutu kullandığın kanalı kilitler.',
  usage: 'kilit'
};