// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

$("#grayButton").click(switchGray);
$("#whiteButton").click(switchWhite);


function switchGray() {
$("body").css("background-color", "gray", "color", "white")
}

function switchWhite() {
$("body").css("background-color", "white", "color", "black")

}
