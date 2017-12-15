//List of video sources
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

var vidColumn;

// // var newPoster = 'images/video-cover.jpg'; would need to make it an object with src and poster

// //Get random src from array and ensure not repeated until all have been played
function getRandSrc() {
    var copyArr = srcArr.slice(0);
    if (copyArr.length < 1) {
        copyArr = srcArr.slice(0);
    }
    var randNum = Math.floor(Math.random() * copyArr.length);
    var randSrc = copyArr[randNum];
    copyArr.splice(randNum, 1);
    return randSrc;
}


// //When video has eneded, call function to grab a new, random src and reload video
function rotateVid() {
    vidColumn = $("#video");
    vidColumn.src = getRandSrc();
    // vidSection.setAttribute('poster', newPoster);
    vidColumn.load();
    vidColumn.play();
}

// To pause a video, click the active column--click again to resume playing
pauseVid = () => {
    $("video").click(function (event) {
        let vidColumn = $("video");
        if (vidColumn.play = true) {
            vidColumn.pause();
        } else {
            vidColumn.play();
        }
    });
}

//Set initial src for each column of index.ejs
for (var i = 0; i < 5; i++) {
    vidColumn = $("video")[i];
    vidColumn.src = getRandSrc();
    // vidSection.setAttribute('poster', newPoster);
    vidColumn.load();
    vidColumn.play();
}