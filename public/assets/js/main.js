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


function loadQuickForm() {
    $("#quickQuilly").click(function (event) {
        quillyOverlay.style.display = block;
        quickQuillyPopup.style.display = block;
    });
}

function submitQuickForm() {
    $("#submitQuickQuilly").click(function (event) {
        quillyOverlay.style.display = none;
        quickQuillyPopup.style.display = none;
    });
}

function cancelQuickForm() {
    $("#cancelQuickQuilly").click(function (event) {
        quillyOverlay.style.display = none;
        quickQuillyPopup.style.display = none;
    });
}

function loadRandomForm() {
    $("#randomQuilly").click(function (event) {
        quillyOverlay.style.display = block;
        randomQuillyPopup.style.display = block;
    });
}

function submitRandomForm() {
    $("#submitRandomQuilly").click(function (event) {
        quillyOverlay.style.display = none;
        randomQuillyPopup.style.display = none;
    });
}

function cancelRandomForm() {
    $("#cancelRandomQuilly").click(function (event) {
        quillyOverlay.style.display = none;
        randomQuillyPopup.style.display = none;
    });
}