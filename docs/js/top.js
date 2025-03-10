var images = ["./docs/img/top/fweminine.png", "./docs/img/top/casual.png"];
var texts = ['fwemininn', 'casual'];
var index = 0;

document.getElementById("left").addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    document.querySelector(".fweminine").src = images[index];
    document.getElementById("tag").innerText = texts[index];
});

document.getElementById("right").addEventListener("click", function() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.querySelector(".fweminine").src = images[index];
    document.getElementById("tag").innerText = texts[index];
});

document.querySelector(".start-button").addEventListener("click", function() {
    var selectedText = texts[index];
    switch (selectedText) {
        case 'fwemininn':
            location.href = './fweminine.html';
            break;
        case 'sporty':
            break;
        case 'casual':
            location.href = './casual.html';
            break;
        default:
            location.href = './index.html';
            break;
    }
});

let bgmPlay = false;
const bgm = document.getElementById('bgm');
const playButton = document.getElementById('play-button');

function bgmPlayOrPause() {

    if (bgmPlay == false) {
        bgm.play();
        bgmPlay = true;
        playButton.src="./docs/img/pause.png";
    } else {
        bgm.pause();
        bgmPlay = false;
        playButton.src="./docs/img/play.png";
    }
}