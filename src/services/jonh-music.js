import trae from 'trae'
import configServises from './config.js'

const musicServise = trae.create({
  baseUrl: configServises.apiUrl
})

export default musicServise
