

let browser = "Chrome";
function checkBrowserVersion(callback){
    setTimeout(() => {
        callback(browser);
    }, 2000);
}
checkBrowserVersion(function(version){
    console.log("Browser Version:"+version);
    
});