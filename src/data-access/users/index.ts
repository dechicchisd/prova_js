import {promises as fs} from 'fs'
import path from 'path'
import {User} from '../../model/users/schema'

export const getUsersFromFile = async (): Promise<User[]> => {
  const filePath = path.resolve(__dirname, `./data.txt`)
  const fileData = await fs.readFile(filePath, 'utf-8')
  const fileLines = fileData.split('\n')
  return fileLines.map((line: string) => {
    const splittedLine = line.split('|')
    return {
      id: +splittedLine[0],
      name: splittedLine[1],
      surname: splittedLine[2],
    }
  })
}
