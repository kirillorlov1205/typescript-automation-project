import * as log4js from 'log4js';
const dateFormat = '%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m';

log4js.configure({
    appenders: {
        fulllog: {
            type: 'file',
            filename: 'playwright/test-results/fullLog.log',
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
            appenders: ['fulllog', 'console'], level: 'debug'
        }
    }
})

export const logger = log4js.getLogger();