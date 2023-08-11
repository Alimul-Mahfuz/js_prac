/**
 * Async await is similer to promise.then syntax.
 * but is more readable way. await can only be used inside asynce. and the function where
 * await is used must expecting to return a promise.
 * @returns 
 */
const registration = () => {
    console.log("Registration in progress. Please keep patient")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (status) {
                resolve();
            }
            else {
                reject();
            }
        },2000)
    })
}

const payment = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if (true) {
                resolve();
            }
            else {
                reject();
            }
        },2000,)
    })
}

const enroll = () => {
    console.log("Enrolling is in progress. You are in a queue");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const status = true;
            if(status){
                resolve(status);
            }
            else{
                reject(status)
            }

        },1000)
    })
}

const startClass = (contd) => {
    if(contd){
        return Promise.resolve("Enroll successful you can join classes");
    }
    else{
        return Promise.reject("Something went worng")
    }
}

const other = () => {
    console.log("Doing other things")
}

async function registrationPR() {
    await registration();
    await payment();
    const status=await enroll();
    const message=await startClass(status);
    console.log(message);

}

registrationPR()

setInterval(()=>{
    other()
},1000)