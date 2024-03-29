/** Copyright (c) 2023 Andy Smith */
/**
 * app.js
 * Main javascript for website home
 * ahs 08/23 - Created
 */

// Globals
var glo = {
    debug: 0, // When set to 1 show console logs
    debugDiv: 0, // When set to 1 show div background colors
    tag: {
        // HTML tags
        divTitle: "div-title", // Main Title
        divHeader: "div-header", // Div Header
        divHeaderLow: "div-header-low", // Header lower section
        divBody: "div-body", // Div Body
        divBodySetWidth: "div-body-set-width", // Div set max width
        divQuote: "div-quote", // Div top quote
        divFooter: "div-footer", // Div Body
    },
    titleMessages: [
        "<a class='link' target='_blank' href='https://en.wikipedia.org/wiki/Paprika'>Paprika➚</a> is often made from dried and crushed sweet bell peppers (capsicum).",
        "<a class='link' target='_blank' href='https://en.wikipedia.org/wiki/Blue_lava'>Blue Lava➚</a> is is a thing!",
        "A day on the planet Venus is longer than its year.",
        "Before you can write poetry you need food, warmth, and shelter.",
        "A rising tide lifts all ships.",
        "We are blessed to live at a higher standard than many ancient kings and emperors.",
        "Intrinsic motivation turns work into play. Extrinsic motivation turns play into work.",
        "<s>No because...</s> Yes if...",
        "There is always a choice",
        "Improvement will happen by change not chance.",
    ],
};

/**
 * Main JavaScript entry point
 * ahs 08/23 - Created
 */
function main() {
    debug();
    console.log("main()");
    console.log(glo);

    buildTitle();

    buildCards();
}

/**
 * Entry point to build the website tittle
 * ahs 08/23 - Created
 */
function buildTitle() {
    console.log("buildTitle()");
    // document.getElementById(glo.tag.divQuote).innerHTML = randomArr(glo.titleMessages);
}

/**
 * Debug help
 * ahs 08/23 - Created
 */
function debug() {
    // Disable the logger
    if (!glo.debug) {
        console.log = function () {};
    }
    console.log("Debugging Enabled");
    console.log("debug()");

    if (glo.debugDiv) {
        // Set the background color of various div objects
        console.log("Debug Div Enabled");
        document.getElementById(glo.tag.divHeader).style.backgroundColor = "Fuchsia";
        document.getElementById(glo.tag.divHeaderLow).style.backgroundColor = "LimeGreen";
        document.getElementById(glo.tag.divBody).style.backgroundColor = "PaleTurquoise";
        document.getElementById(glo.tag.divBodySetWidth).style.backgroundColor = "LemonChiffon";
        document.getElementById(glo.tag.divFooter).style.backgroundColor = "DarkOliveGreen";
        document.getElementById(glo.tag.divTitle).style.backgroundColor = "MidnightBlue";
        document.getElementById(glo.tag.divQuote).style.backgroundColor = "MediumPurple";
        document.body.style.backgroundColor = "MediumSlateBlue";
    }
}

/** Sets up collapsible cards */
function buildCards() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}
