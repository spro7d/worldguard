const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Seviye Yardım  Komutları:",`
seviye resim: Seviye'e Arka plan resim eklersin.
seviye saydam: Seviyenize  Saydam Görüntü verisiniz.
Seviye renk: Seviyenize Renk Verisiniz.
seviye ödül: Hangi Rol için Ödül Verecekseniz onu seç.
seviye: Seviyenizi Gösterir.

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'seviyeyardım',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'seviyeyardım'
};
