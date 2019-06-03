"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
client.on("ready", () => {
    console.log("Ready to go!");
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    msg.channel.send(`${msg.author.username} just used a command!`);
});
client.on("guildMemberAdd", member => {
    const exampleEmbed = new Discord.RichEmbed()
        .setTitle(`Click here for our website.`)
        .addField(`Greetings!`, `Welcome ${member.displayName}`, true)
        .addField(`How to apply`, `if you want to apply to our clan, you can visit our website.`, true)
        .setURL('https://sites.google.com/view/squah/home')
        .setImage('https://cdn.discordapp.com/attachments/460556459848106006/584572468811792423/CLAN.png')
        .setFooter(`Goodluck, we hope you make it!`);
    member.send(exampleEmbed);
});
client.on("guildMemberAdd", member => {
    let welcomeChannel = member.guild.channels.find(channel => channel.name === 'welcome');
    const welcomeEmbed = new Discord.RichEmbed()
        .addField(`Welcome!`, `Hello ${member.displayName} welcome to squah clan, please read the DM I've sent you for info!`, true)
        .setThumbnail(`https://cdn.discordapp.com/attachments/460556459848106006/584572468811792423/CLAN.png`);
    welcomeChannel.send(welcomeEmbed);
});
client.login(process.env.BOT_TOKEN);
