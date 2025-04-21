// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

/***
* Code added by AI Assistant
* Prompt: Show <element ID> using a fade-in animation
***/
$w("#section1").onClick(() => {
    $w("#section1").show("fade")
        .then(() => {
            console.log("Section is now visible with a fade effect.");
        });
});
