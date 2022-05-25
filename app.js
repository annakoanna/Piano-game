let keys = document.querySelectorAll(".key")
let level1 = "Level 1";
const startLevel = document.getElementById('level')
const result = document.getElementById('button-result')
const notes = document.getElementById('button-notes')
let score = 0;
const restart = document.getElementById("restart");
let level




keys.forEach(function (key) {
    key.addEventListener('click', () => play(key))
})

function play(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add("active")
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active")

    })
    console.log(key.id)
    if (score >= 45) {
        score = score + 1;
        level = levelFourBlacknotes;
        wrongNote(key)
        changeText(level)
    } else if (score >= 30) {
        score = score + 1;
        level = levelTreeNotes;
        wrongNote(key)
        changeText(level)
    } else if (score >= 15) {
        score = score + 1;
        level = levelTwoNotes;
        console.log("you on round 2")
        wrongNote(key)

        changeText(level)

    } else if
        (score < 15) {
        console.log("good job")
        score = score + 1;
        console.log(score);
        level = levelOneNotes;
        wrongNote(key)

        changeText(level)

    }// else if (key.id !== notes.innerText) {
    //alert("Wrong note")
    // score = 0;
    // level = levelOneNotes
    //changeText(level)
}

//variable for levels
const levelOneNotes = ["C", "E", "C", "C", "E", "C", "D", "C", "E", "E", "D", "C", "E", "C", "D"]
const levelTwoNotes = ["E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "E", "D", "D"]
const levelTreeNotes = ["G", "G", "G", "D", "E", "E", "D", "B", "B", "A", "A", "G", "D", "G", "G"]
const levelFourBlacknotes = ["G", "G", "G", "Df", "Ef", "Gf", "Af", "Bf", "A", "B", "Df", "Ef", "Gf", "Af", "B"]


function wrongNote(key) {
    console.log(key)
    console.log(notes.innerText)

    if (key.id !== notes.innerText) {
        alert("Wrong note")
        console.log(key.id)
        console.log(notes.innerText)
        score = 0;
        level = levelOneNotes
        changeText(level)
    }
}

function changeText(arr) {
    //for (let i = 0; i < arr.length; i++) {
    let randomNote = Math.floor(Math.random() * arr.length)
    notes.innerText = arr[randomNote];

    // };
}
//changing notes inside start button
notes.addEventListener("click", (e) => {
    if (notes.innerText == "Start") {
        changeText(levelOneNotes);

    }

    //changeText(levelOneNotes);
    startLevel.addEventListener("click", (e) => {
        if (score == 15) {

        }
    })







    //setTimeout(changeText)


});

document.querySelector("#restart").addEventListener('click', function () {
    window.location.reload();
    result = "Result:";


});

































