require('dotenv').config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildModeration,
    ],
});

const roles = [
    {
        id: '1307968867246538772',
        label: 'John'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1330260525455769776');
        if (!channel) return;

      const row = new ActionRowBuilder();

      roles.forEach((roles) => {
        row.components.push(
            new ButtonBuilder()
                .setCustomId(roles.id)
                .setLabel(roles.label)
                .setStyle(ButtonStyle.Primary)
        );
      });

      await channel.send({
        content: 'Please Choose Roles Below!',
        components: [row]
      });
      process.exit();
    } catch (error) {
      console.log(error);  
    }
});

client.login(process.env.TOKEN);