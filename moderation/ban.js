const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a member from the server!',
    //devOnly: John,
    // Testonly: John,
    options : [
        {
            name: 'target-user',
            description: 'the user to ban.',
            required: true,
            type: ApplicationCommandOptionType.Mentionable
        },
        {
            name: 'reason',
            description: 'The reason for banning.',
            type: ApplicationCommandOptionType.String
        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botpermissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply('ban...');
    },
};