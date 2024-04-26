const winston = require("winston")
const {combine, timestamp, printf,json,prettyPrint} = winston.format

const logger = winston.createLogger({
    level:"info",
    format:combine(
        timestamp(),
        // printf((info)=>`${info.timestamp} ${info.level} ${info.message}`)
        json()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:"app.log",
            level:"info"
        })
    ]
})

const requestLog = {method:"Get",isAuthenticated:false}
const childLogger = logger.child(requestLog)

logger.info("An info log",requestLog)
childLogger.info("An info log. childlogger")