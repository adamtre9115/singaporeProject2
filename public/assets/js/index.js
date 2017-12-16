// var loginVids = [
//     "assets/images/boats.mp4",
//     "assets/images/city.mp4",
//     "assets/images/surfers.mp4",
//     "assets/images/snow.mp4",
//     "assets/images/boat_sunset.mp4",
//     "assets/images/blurred_lights.mp4",
//     "assets/images/beach_sunset.mp4"
// ];

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