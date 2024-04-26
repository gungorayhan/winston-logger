const winston = require("winston")

const logger = winston.createLogger({
    level:"info",
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:"app.log",
            level:"info"
        })
    ]
})


logger.info("An info log")
logger.error("An error log")