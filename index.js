const Logger = require('./logger')

const logger = new Logger()

logger.on('message', data => {
    console.log('Logger: ', data)
})

logger.log('POST', '/admin/login')
logger.log('GET', '/admin/dashboard')
logger.log('DELETE', '/admin/user-delete/123')