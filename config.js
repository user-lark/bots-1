const numowner = '6281291984823'
global.namebot = 'RIFF XD'
global.title = 'RIFF X DDOS'
// Thumbnail Logo Bot
global.banner = 'https://telegra.ph/file/d6dae226b44cc82b027da.jpg'
global.attacking = 'https://telegra.ph/file/d6dae226b44cc82b027da.jpg'
global.tracking = 'https://telegra.ph/file/d6dae226b44cc82b027da.jpg'
global.brutall = 'https://telegra.ph/file/d6dae226b44cc82b027da.jpg'
global.standby = 'https://telegra.ph/file/d6dae226b44cc82b027da.jpg'
// kebutuhan cpanel
global.apikey = 'ptla mu'
global.linkPanel = 'isi link panel'
global.egg = '15'
global.loc = '1'

// Ga Perlu Di Ganti
global.owner = [numowner]  
global.mods = [numowner] 
global.prems = [numowner]
global.nameowner = 'RIFF XD'
global.numberowner = numowner
global.mail = 'RIFFXD@ATTACKER.ID' 
global.maxwarn = '2'

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
