import {Command, CommandoClient} from 'discord.js-commando'
import path from 'path'
import fs from 'fs'

const baseFile = './commandBase'
import commandBase from './commandBase'

export default (client: CommandoClient) => {

  const commands: Command[] = []

  const readCommands = (dir: string) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile && file !== 'load-commands.js') {
        const option = require(path.join(__dirname, dir, file))
        commands.push(option)
        if (client) {
          commandBase(client, option)
        }
      }
    }
  }

  readCommands('.')

  return commands
}