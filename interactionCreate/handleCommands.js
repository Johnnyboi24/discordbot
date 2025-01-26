const { devs, testServer} = require('../../../config.json');

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;


    const localCommands = getLocalCommands();

    try {
      const commandObject = localCommands.find(
        (cmd) => === interaction.commandName
      );

      if (!commandObject) return;

      if(commandObject.devOnly) {
        if (!devs.includes(interaction.member.id)) {
            interaction.reply({
                content: `Only Developers are allowed to run this command.`,
                ephemeral: true,
            });
            return;
        }

        if (commandObject.botPermissions?.length) {
            for(const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                      content: "Sorry I don't have enough permissions."
                      ephemeral: true,  
                    });
                }
            }
        }
      }
    } catch (error) {
      console.log(`There was an error running this command: ${error}`)  
    }
}