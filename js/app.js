/** Copyright (c) 2023 Andy Smith */
/**
 * app.js
 * Main javascript for website home
 * ahs 08/23 - Created
 */

// Globals
var glo = {
    debug: 1,     // When set to 1 show console logs
    debugDiv: 1,  // When set to 1 show div background colors
    tag: {        // HTML tags
        title: "div-title",                     // Main Title
        divHeader: "div-header",                // Div Header
        divBody: "div-body",                    // Div Body
        divBodySetWidth: "div-body-set-width",  // Div set max width
        divFooter: "div-footer"                 // Div Body
    },
    titleMessages: [
        "Hey!",
        "Welcome"
    ]
} 


/**
 * Main JavaScript entry point
 * ahs 08/23 - Created
 */
function main() {
    debug()
    console.log("main()");
    console.log(glo)
   
    buildTitle();
    
}

/**
 * Entry point to build the website tittle
 * ahs 08/23 - Created
 */
function buildTitle() {
    console.log("buildTitle()")
    document.getElementById(glo.tag.title).innerHTML = randomArr(glo.titleMessages);
}


/**
 * Debug help
 * ahs 08/23 - Created
 */
function debug() {
    // Disable the logger
    if (!glo.debug) {
        console.log = function(){};
    }
    console.log("Debugging Enabled")
    console.log("debug()")

    if (glo.debugDiv) { // Set the background color of various div objects
        console.log("Debug Div Enabled")
        document.getElementById(glo.tag.divHeader).style.backgroundColor = "pink"
        document.getElementById(glo.tag.divBody).style.backgroundColor = "steelBlue"
        document.getElementById(glo.tag.divBodySetWidth).style.backgroundColor = "lightBlue"
        document.getElementById(glo.tag.divFooter).style.backgroundColor = "orange"
        document.body.style.backgroundColor = "yellow"
    }
}



