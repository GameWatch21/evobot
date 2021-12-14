exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;

  if (channelID !== botChannel) {
    return;
  }

  return true;
};

var DJ_PERMISSION_OBJ='';
exports.isDJOnly = (command,member,guild) => {
  /**
   * Role checking logic
   */
  if(!DJ_COMMANDS||DJ_COMMANDS.length==0){
    return false;
  }
  if(DJ_COMMANDS.indexOf(command)<0){
    return false;
  }
  if (!DJ_PERMISSION_OBJ && guild) {
    DJ_PERMISSION_OBJ = guild.roles.cache.find(role => role.name === "🎧 | DJ")
  };

  if(DJ_PERMISSION_OBJ && !member.roles.cache.has(DJ_PERMISSION_OBJ.id)) {
     
     return true;
  } 
  return false;
};

let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.YOUTUBE_API_KEY = config ? config.YOUTUBE_API_KEY : process.env.YOUTUBE_API_KEY;
exports.SOUNDCLOUD_CLIENT_ID = config ? config.SOUNDCLOUD_CLIENT_ID : process.env.SOUNDCLOUD_CLIENT_ID;
exports.PREFIX = (config ? config.PREFIX : process.env.PREFIX) || "/";
exports.MAX_PLAYLIST_SIZE = (config ? config.MAX_PLAYLIST_SIZE : parseInt(process.env.MAX_PLAYLIST_SIZE)) || 10;
exports.PRUNING = (config ? config.PRUNING : (process.env.PRUNING === 'true' ? true : false));
exports.STAY_TIME = (config ? config.STAY_TIME : parseInt(process.env.STAY_TIME)) || 30;
exports.DEFAULT_VOLUME = (config ? config.DEFAULT_VOLUME : parseInt(process.env.DEFAULT_VOLUME)) || 100;
exports.LOCALE = (config ? config.LOCALE : process.env.LOCALE) || "en";
var DJ_ROLE = config ? config.DJ_ROLE : process.env.DJ_ROLE;
var DJ_COMMANDS =  config ? config.DJ_COMMANDS : (process.env.DJ_COMMANDS||'').split(',');
if(DJ_ROLE && (!DJ_COMMANDS||!DJ_COMMANDS.length)){
   DJ_COMMANDS = 'loop,move,pause,pruning,remove,shuffle,skip,skipto,volume,stop'.split(',');
}
exports.DJ_COMMANDS = DJ_COMMANDS;