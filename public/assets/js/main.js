//Character countdown for textarea of Quick Quilly form
// var maxLength = 180;
// $("#quillyMsg").keyup(function () {
//     var currCharCount = $(this).val().length;
//     var charLeft = maxLength - currCharCount;
//     $("#charCount").text(charLeft);
//     if (charLeft <= 20) {
//         $("#charCount").css("color", "red");
//     }
// });



var quillyOverlay = $("#popupOverlay");
var quickQuillyPopup = $("#quickQuillyContainer");
var randomQuillyPopup = $("#randomQuillyContainer");


$("#quickQuilly").click(function (event) {
    quillyOverlay.css("display", "block");
    quickQuillyPopup.css("display", "block");
});

$("#submitQuickQuilly").click(function (event) {
    quillyOverlay.css("display", "none");
    quickQuillyPopup.css("display", "none");
});

$("#cancelQuickQuilly").click(function (event) {
    quillyOverlay.css("display", "none");
    quickQuillyPopup.css("display", "none");
});

$("#randomQuotes").click(function (event) {
    quillyOverlay.css("display", "block");
    randomQuillyPopup.css("display", "block");
});

$("#submitRandomQuilly").click(function (event) {
    quillyOverlay.css("display", "none");
    randomQuillyPopup.css("display", "none");
});

$("#cancelRandomQuilly").click(function (event) {
    quillyOverlay.css("display", "none");
    randomQuillyPopup.css("display", "none");
});