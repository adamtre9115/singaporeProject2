//Character countdown for textarea of Quick Quilly form
var maxLength = 180;
$("#quillyMsg").keyup(function () {
    var currCharCount = $(this).val().length;
    var charLeft = maxLength - currCharCount;
    $("#charCount").text(charLeft);
    if (charLeft <= 20) {
        $("#charCount").css("color", "red");
    }
});


function loadQuickForm() {
    var quickBtn = $("#quickQuilly");
    var quickFormCon = $("#quickContainer");
    $("#quickQuilly").click(function (event) {
        quickFormCon.style.zIndex = 100;
    });
}