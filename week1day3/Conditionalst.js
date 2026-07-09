
function launchBrowser(browser)
{
if(browser=="edge")
{
    console.log("launched browser",browser);
    
}
else
{
    console.log("Default browser launched");
}
}
launchBrowser("edge")
launchBrowser("chrome")
function runTests(testType)
{
    switch (testType) 
    {
        case "sanity":
            console.log("Test type is sanity");
            break;
        case "integration":
            console.log("Test type is integration");
            break;
        default:
            console.log("Test type is smoke");
            break;
    }
}
runTests("sanity")
runTests("integration")
runTests("system")