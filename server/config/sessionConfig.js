const session = require('express-session')
const FileStore = require('session-file-store')(session)
 
const sessionConfig = {
 store: new FileStore(),
 name: 'sid',
 secret: process.env.SESSION_SECRET ?? 'secret',
 resave: false,
 saveUnitialized: false,
 cookie: {
   maxAge: 1000 * 60 * 60,  
   httpOnly: true
 }
}
 
module.exports = sessionConfig
