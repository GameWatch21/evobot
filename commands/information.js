const i18n = require("../util/i18n");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "Information",
  aliases: ["info" , "i"],
  description: i18n.__("uptime.description"),
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
  const embed = new MessageEmbed()
    .setTitle("Bot Information")
    .setDescription(`Blood Music Bot created by \`GameWatch21\`\n\nUser ID: \`888290025303846912\`\nUsername: <@888290025303846912>\n\n**Uptime:**\n${i18n.__mf("uptime.result", {days: days, hours: hours, minutes: minutes, seconds: seconds})}\n\n**Lore:**\nOne day a young child name Brian had a vision that someday his life will turn into Disaster, The End.`)
    .setColor("RED")
    .setFooter("What are you looking at?");
    return message.channel.send(embed)
    /* message.reply(i18n.__mf("uptime.result", { days: days, hours: hours, minutes: minutes, seconds: seconds })) */
      .catch(console.error);
  }
};
