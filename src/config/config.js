'use strict'
exports.__esModule = true
exports.getConfigs = void 0
import package_json_1 from '../../package.json'
let getConfigs = function () {
  let port = process.env.PORT || 3000
  let configs = {
    port: port,
    app: {
      name: package_json_1.name,
      title: 'Prova Tirocinio',
      description: package_json_1.description,
      version: package_json_1.version,
    },
    host: '' + process.env.HOST,
  }
  return configs
}
exports.getConfigs = getConfigs
