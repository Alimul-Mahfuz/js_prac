const payment = () => {
    console.log("Payment is done");
    return true;
}

const registration = () => {
    console.log("Registration is done");
    return true;
}

const enroll = () => {
    console.log("You are now enrolled");
}

const printInvoice = () => {
    console.log("Invoice printed");
}

const submitInvoice = () => {
    console.log("Submitted Invoice");
    return true;
}

// This is call callback hell
/**
 * But using asynchronous we can eleminate the waiting time of user while other task
 * is going on on the background. For example here registration process take 2000 ms but 
 * you can sill browsing other thing on the website while registration is processed on the
 * background. But we also have to controlling the flow of the registration. To preserving 
 * the flow if the step is more it will be deficult to interprate by other programmers. It's
 * also called callback hell. The solution is to use promisese or async/await.
 * 
 */
setTimeout(() => {
    registration();
    setTimeout(() => {
        if (payment()) {
            setTimeout(() => {
                printInvoice();
                setTimeout(() => {
                    const status = submitInvoice();
                    if (status) {
                        enroll();
                    } else {
                        console.log("something went wrong")
                    }
                }, 2000)
            }, 2000)
        }
    }, 1000)
}, 2000)

console.log("doing other things")
setInterval(()=>{
    console.log("clicking button and browsing")
},500)