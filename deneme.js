const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json')
const { Client, MessageEmbed } = require('discord.js')

var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`sunucuya girdim ${client.user.tag}!`);
  client.user.setActivity('yardım için --yardım yaziniz ', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('as knk hoşgeldin');
  }
});

client.on('message', async message => {
  if (message.content.startsWith('--play')) {
   const args = message.content.split(' ').slice(1)
   const botmesajı = args.join(" ")
   if (!botmesajı) return message.reply('Lütfen önce bir URL belirtiniz!')
   if (message.member.voice.channel) {
     const connection = await message.member.voice.channel.join();
     const ytdl = require('ytdl-core');
     connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly'}) )
   } else {
     message.reply('Lütfen önce bir ses kanalına katılınız!');
   }
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'göt') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bok') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gerizekalı') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.delete()
    msg.channel.send('ne küfrediyon lan');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'adam') {
    msg.react('😋')
    msg.reply('tşk');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sunucukoru') {
    msg.reply('sunucu korunma tamamlandi');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.reply('-- bizim prefiximizdir! --özelebak komudu özlinize mesaj gönderir bu komut geliştirilcektir.  -- yazıp herhangi bir konuşma başlatcak şey yazarsan bot size cevap verir örneğin --nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'özelebak') {
    msg.author.send('baktım :) (bu komut geliştirilcektir!)');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'nasılsın') {
    msg.reply('iyiyim sen?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'naber') {
    msg.reply('iyiyim senden?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'nabıyon') {
    msg.reply('sana yazıyom');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'benle çıkarmısın') {
    msg.reply('ne 😲');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'seni seviyom') {
    msg.reply('ne 😲');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'sikerim seni') {
    msg.reply('sik hadi');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'hayat nasıl gidiyor?') {
    msg.reply('Güzel gidiyor.Yani sen gidiyorsun');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'sew olak mi') {
    msg.reply('olr ama rüyanda');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'nasılsınız hanımefendi') {
    msg.reply('iyiyim beyefendi siz nasılsınız ? Çok romantiksiniz .d');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'old but gold') {
    msg.reply('senden değerli şeyler olmadı hiç');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'para') {
    msg.reply('en sevdiğim şey');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'knk olakmı?') {
    msg.reply('olur');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'kaç cm?') {
    msg.reply('sananae');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'Sesin çok güzel') {
    msg.reply('teşekkür ederim bitanem');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + '31') {
    msg.reply('çok komisin kahkaha şelalesi cidden yha');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'napim') {
    msg.reply('napıyorsan onu yap kardeşim.Bana niye soruyon');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'saman ye') {
    msg.reply('eşşeğin bokunu ye');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'neden') {
    msg.reply('sanane');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'seni çok özledim') {
    msg.reply('bende seni');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'adın ne') {
    msg.reply('sanane');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  prefix + 'cinsiyetin ne') {
    msg.reply('gayımda sanane');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'bende iyiyim') {
    msg.reply('oo iyi o zaman');
  }
});



client.login('ODUwMDQ5ODg3NTgzMzM4NTE3.YLkEpg.OaTCmZE8idFJIYXPcNDxW1Y9s0I');
