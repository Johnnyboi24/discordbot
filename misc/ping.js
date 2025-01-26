module.exports = {
    name: 'ping',
    description: 'Pong!',
    //devOnly: John,
    // Testonly: John,
    // options; john,

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
};