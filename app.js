require("./loggers")


const winston = require("winston")

const paymentLogger= winston.loggers.get("PaymentLogger")
const orderLogger = winston.loggers.get("OrderLogger")

paymentLogger.info("Payment logger")
orderLogger.error("Order logger")

let requestHandler =(path)=>{
    const profiler = paymentLogger.startTimer()

    const ONE_BILLION =1000000000
    for(let i=0; i<ONE_BILLION;i++){
        j=i*2
    }

    profiler.done({message:`Request to ${path} processed`})
}

requestHandler("/payment")