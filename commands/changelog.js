const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "changelog",
  aliases: ["log" , "update" , "updates"],
  description: "The changelog or update for Blood Music Bot",
  execute(message) {
       const embed = new MessageEmbed()
    .setTitle("Changelog - V1.2")
    .setDescription(`Full Information about Blood Music Bot Updates\n\n**• Version 1.2**\nString for integer fixed, Search now should be able to be used again, creating more bugs, \`changelog\` command added\n\n**• Version 1.1**\nSome bug fixed, changes on language and description, add \`information\` command with all the detailed information for the bot\n\n**• Version 1.0**\nThe Initial Release and make the bot become publicly used`)
    .setFooter("Another way to waste your time")
    .setColor("RANDOM")
    .setTimestamp();

    message.channel.send(embed)
  }
}