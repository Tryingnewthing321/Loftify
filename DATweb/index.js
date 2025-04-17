let currentAudio = null;

var musicbaba = document.querySelectorAll(".music").length;

for (var i = 0; i < musicbaba; i++) {
    document.querySelectorAll(".music")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.trim();
        makeSound(buttonInnerHTML);
        buttonAnimation(this.classList[0]);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch (key) {
        case "Music1":
            currentAudio = new Audio('./the_weeknd_starboy.mp3');
            break;
        case "Music2":
            currentAudio = new Audio('./khuda_ki_inayat_hai.mp3');
            break;
        case "Music3":
            currentAudio = new Audio('./call_out_my_name.mp3');
            break;
        case "Music4":
            currentAudio = new Audio('./aquainted.mp3');
            break;
        default:
            console.log("Key not mapped: " + key);
            return;
    }

    currentAudio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Pause button logic
const pauseButtons = document.querySelectorAll(".pausebutton");

pauseButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (currentAudio) {
            currentAudio.pause();
        }
    });
});
