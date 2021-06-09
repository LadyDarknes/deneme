const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json')
const { Client, MessageEmbed } = require('discord.js')

var prefix = işaret.prefix


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('as knk hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salam') {
    msg.reply('selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'idiot') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sg') {
msg.delete()
    msg.reply('küfretme');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hile') {
msg.delete()
    msg.reply('ticket');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi') {
    msg.reply('hi welcome');
  }
});

client.login('ODUwMDQ5ODg3NTgzMzM4NTE3.YLkEpg.OaTCmZE8idFJIYXPcNDxW1Y9s0I');
