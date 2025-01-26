const { ActivityType, Guild, GuildMember } = require("discord.js");

let status = [
    {
        name: 'Over the server',
        type: ActivityType.Watching,
    },
    {
        name: 'With Commands',
        type: ActivityType.Playing,
    },
    {
        name: `${GuildMember} Server`,
        type: ActivityType.Watching,
    }
];

module.exports = (client) => {
    console.log(`${client.user.tag} is online.`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
};
