async function myFunc(){
    function getVideo(){
        console.log("Got Video");
    }
    function addIntro(){
        return console.log("Intro Added");
    }
    function addSummary(){
        return console.log("Summmary Added");
    }
    getVideo();
    await addIntro();
    addSummary();
}
myFunc();
console.log("The await function checking...");