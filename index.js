require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildModeration,
    ]
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
        .setTitle("Development Announcement!")
        .setDescription('This is an embeded Message.')
        .setColor('Random')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciz5-0QK0WC0L66fN3uO0fuQ7avF-Juegmw&s')
        .setAuthor({name: 'Carter Willey', IconURL: 'https://imgur.com/a/AaK2Aq7', url: 'https://discord.js.org'})
        .setURL('https://discord.gg/dt4h9ZbXmc')
        .addFields({
            name: 'Field Title',
            value: 'Message here',
            inline: true,
        },
        {
            name: '2nd Field Title',
            value: ' Randomness',
            inline: true,
        });
        
        interaction.reply({ embeds: [embed] });
        
    }
});


client.on('ready', (c) => {
    console.log(` ${c.user.tag} is online`)
})

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello') {
        message.reply('hello there')
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`The sum is ${num1 + num2}`);

        console.log(num1);
        console.log(num2);
    }
});

client.login(process.env.TOKEN);


