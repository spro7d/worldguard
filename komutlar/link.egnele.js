const Discord = require('discord.js');
const fs = require('fs');
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));

exports.run = async (client, message) => {
  
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    if(secenekler.length < 1) return message.reply("Link Engelleme Açmak İçin `m!link-engelle aç` kapatmak için `!link-engelle kapat`").then(m => m.delete(10000));

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("aç veya kapat yaz!")

    if (secenekler === "aç" || secenekler === "on") {
    
    message.delete();
        
      
    
        message.channel.send("Link Engelleme Sistemi: **Açık**!").then(m => m.delete(5000));
    
  if(!linkEngel[message.guild.id]){
        linkEngel[message.guild.id] = {
            linkEngel: "acik"
          };
  };

          fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
    };

    if (secenekler === "kapat" || secenekler === "off") {
  message.channel.send(`Link Engelleme Sistemi: **kapalı**!`).then(m => m.delete(5000));
    
  if(!linkEngel[message.guild.id]){
        linkEngel[message.guild.id] = {
            linkEngel: "kapat"
          };
  };

        fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })

       delete linkEngel[message.guild.id]
       delete linkEngel[message.guild.id].linkEngel

        message.channel.send("İşlem Başarılı: Kapalı!").then(m => m.delete(10000));
    
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['link-engel', 'reklamkoruması', 'reklam-koruması', 'linkengel'],
        permLevel: 3
      };
      
    exports.help = {
        name: 'link-engelle',
        description: 'Lİnk engelleme sistemini açıp kapatmanızı sağlar.',
        usage: 'link-engelle <aç/kapat>'
    };