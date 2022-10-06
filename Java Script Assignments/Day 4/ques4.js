function getVideo(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            if(getVideo()){
                resolve("Got Video")
            } 
            else{
                reject("Didn't get video")
            }
        }, 3000)
    })
}

let methodForResolve = (result) => {
    console.log("Message After Resolve = " + result);
}
let methodForReject = (reject) => {
    console.log("Message After Reject = " + reject);
}

function addIntro(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            if(addIntro()){
                resolve("Intro Added")
            }
            else{
                reject("Intro not added")
            }
        }, 3000);
    })

}

function addSummary(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            if(addSummary()){
                resolve("Summary Added")
            }
            else{
                reject("Summary not Added")
            }
        }, 3000);
    })
}

getVideo().then(methodForResolve).catch(methodForReject);
addIntro().then(methodForResolve).catch(methodForReject);
addSummary().then(methodForResolve).catch(methodForReject);