'use strict'
let env = '"production"';
if(process.env.NODE_ENV == 'beta') {
  env = '"beta"'
}
module.exports = {
  NODE_ENV: env
}
