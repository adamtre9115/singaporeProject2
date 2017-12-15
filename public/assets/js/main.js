//Character countdown for textarea of Quick Quilly form
var maxLength = 180;
<<<<<<< HEAD
$("#quillyMsg").keyup(function () {
=======
$("#quillyMessage").keyup(function () {
>>>>>>> bae2625abe85c206aef14d71a59790b2d7b0c555
    var currCharCount = $(this).val().length;
    var charLeft = maxLength - currCharCount;
    $("#charCount").text(charLeft);
    if (charLeft <= 20) {
        $("#charCount").css("color", "red");
    }
});







//User clicks "Report an Issue" button and is presented with disclaimer. Must confirm or cannot proceed to login.//
function loadBtn() {

    var btn = document.querySelector('.btn');

    var btnFront = btn.querySelector('.btn-front'),
        btnBack = btn.querySelector(' .btn-back'),
        btnConfirm = btn.querySelector('.btn-back .confirm');

    btnFront.addEventListener('click', function (event) {
        btnBack.style.visibility = "visible";

        var mx = event.clientX - btn.offsetLeft,
            my = event.clientY - btn.offsetTop;

        var w = btn.offsetWidth,
            h = btn.offsetHeight;

        var directions = [{
                id: 'top',
                x: w / 2,
                y: 0
            },
            {
                id: 'right',
                x: w,
                y: h / 2
            },
            {
                id: 'bottom',
                x: w / 2,
                y: h
            },
            {
                id: 'left',
                x: 0,
                y: h / 2
            }
        ];

        directions.sort(function (a, b) {
            return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
        });

        btn.setAttribute('data-direction', directions.shift().id);
        btn.classList.add('is-open');
    });

    btnConfirm.addEventListener('click', function (event) {
        btn.style.display = "none";
        authContainer.style.display = "block";
        var main = document.getElementById('main');
        main.style.display = "flex";
        main.style.justifyContent = "center";
    });

    function distance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
};