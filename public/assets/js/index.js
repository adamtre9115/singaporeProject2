var srcArr = [
    "assets/images/boats.mp4",
    "assets/images/city.mp4",
    "assets/images/surfers.mp4",
    "assets/images/snow.mp4",
    "assets/images/boat_sunset.mp4",
    "assets/images/blurred_lights.mp4",
    "assets/images/beach_sunset.mp4",
    "assets/images/snowfall.mp4",
    "assets/images/sunset_clouds.mp4",
    "assets/images/flowering_tree.mp4",
    "assets/images/green_forest.mp4",
    "assets/images/sunset_lake.mp4",
    "assets/images/sunrise.mp4",
    "assets/images/sea_cliff.mp4"
];

var randSrc;

function getSrc() {
    var duplicateArr = srcArr.slice(0);

    var noRepeat = function () {
        if (duplicateArr.length < 1) {
            duplicateArr = srcArr.slice(0);
        }
        var randNum = Math.floor(Math.random() * duplicateArr.length);
        randSrc = duplicateArr[randNum];
        console.log("randSrc: " + randSrc);
        duplicateArr.splice(randNum, 1);
        return randSrc;
    };
}


function rotateVid() {
    getSrc();
    // $("#col-1").src = randSrc;
    // $("#col-2").src = getSrc();
    // $("#col-3").src = getSrc();
    // $("#col-4").src = getSrc();
    // $("#col-5").src = getSrc();

    // $("#col-1").load();
    // $("#col-2").load();
    // $("#col-3").load();
    // $("#col-4").load();
    // $("#col-5").load();


    // var newPoster = 'images/video-cover.jpg'; would need to make it an object with src and poster
    var currSrc = $("video");
    var newSrc = randSrc;
    var vidSection = $("section");

    $(vidSection).click(function (event) {
        currSrc.pause();
        currSrc.setAttribute("src", newSrc);
        currSrc.load();
        // vidcontainer.setAttribute('poster', newPoster);
        vidcontainer.play();
    }, false);

    $(document).ready(function () setInterval(rotateVid, 10000);
    });






// var vidColumn;
// var currIndex;

// let renderVids = () => {
//     vidColumn = $("video")[i];
//     currIndex = $(vidColumn).attr("data-index");
//     vidColumn.src = loginVids[currIndex];
//     vidColumn.load();
// }

// let cycleVids = () => {
//     currIndex = $(vidColumn).attr("data-index") + 1;
//     if (currIndex >= loginVids.length) {
//         currIndex = 0;
//     }
//     $(vidColumn).attr("data-index", currIndex);
//     vidColumn.src = loginVids[currIndex];
//     renderVids();
// }

// for (var i = 0; i < 5; i++) {
//     renderVids();
// }


// var vidColumn;
// var currIndex;

// let renderVids = () => {
//     vidColumn = $("video")[i];
//     currIndex = $(vidColumn).attr("data-index");
//     vidColumn.src = loginVids[currIndex];
//     vidColumn.load();
// }

// let rotateVid = () => {
//     currIndex = $(vidColumn).attr("data-index") + 1;
//     if (currIndex >= loginVids.length) {
//         currIndex = 0;
//     }
//     $(vidColumn).attr("data-index", currIndex);
//     vidColumn.src = loginVids[currIndex];
//     renderVids();
// }

// for (var i = 0; i < 5; i++) {
//     renderVids();
// }