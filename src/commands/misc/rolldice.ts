import { CommandoClient, Command, CommandoMessage } from 'discord.js-commando'

export default class RollDiceCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'rolldice',
            group: 'misc',
            memberName: 'rolldice',
            description: 'Rolls a random number between 1 and 6.'
        })
    }

    async run(message: CommandoMessage, args: object|string|string[], fromPattern: boolean) {
        console.log('ROLL DICE')
        message.reply(Math.ceil(Math.random() * 6))
        return null;
    }
}