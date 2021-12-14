const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    const Embed = new MessageEmbed()
    .setTitle("Invite Link")
    .setDescription(`Idk if you want to invite this, but [here is the link](https://youtu.be/dQw4w9WgXcQ)`)
    .setColor("BLUE")
    .setFooter("Created by GameWatch21");
    return message.channel.send(Embed)
    
      .catch(console.error);
  }
};
