import {name, description, version} from '../../package.json'

export const getConfigs = () => {
  const port = process.env.PORT || 3000
  const configs = {
    port: port,
    app: {
      name,
      title: 'Prova Tirocinio',
      description,
      version,
    },
    host: `${process.env.HOST}`,
  }
  return configs
}
