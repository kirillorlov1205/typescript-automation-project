import * as log4js from 'log4js'
const dateFormat = '%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m'

log4js.configure({
    appenders: {
        fulllog: {
            type: 'file',
            filename: './cypress/assets/test-resultLogs/logs/fullLog.log',
            layout: {
                type: 'pattern',
                pattern: dateFormat
            }
        },
        console: {
            type: 'console',
            layout: {
                type: 'basic'
            }
        }
    },
    categories: {
        default: {
            appenders: ['fulllog', 'console'], level: 'info'
        }
    }
})

export const logger = log4js.getLogger()