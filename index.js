const winston = require("winston")
const {combine, timestamp, printf} = winston.format

const logger = winston.createLogger({
    level:"info",
    format:combine(
        timestamp(),
        printf((info)=>`${info.timestamp} ${info.level} ${info.message}`)
    ),
    transports:[
        new winston.transports.Console(),
        // new winston.transports.File({
        //     filename:"app.log",
        //     level:"info"
        // })
    ]
})


logger.info("An info log")