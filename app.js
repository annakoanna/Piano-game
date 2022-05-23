let keys = document.querySelectorAll(".key")
let point = 0;
let level = "Level 1";
const start = document.getElementById('start')
const startLevel = document.getElementById('level')
const points = document.getElementById('button-result')
const notes = document.getElementById('button-notes')


keys.forEach(function(key) {
    key.addEventListener("click", () => play(key))
})

function play(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add("active")
    noteAudio.addEventListener("ended", () =>{
        key.classList.remove("active")
    })
}
const levelOneNotes = [C, D, E]
const levelTwoNotes = [C, D, E, F, G]
const levelTreeNotes = [C, D, E, F, G, A, B]
const levelFourBlacknotes = [Df, Ef, Gf, Af, Bf]
const levelfiveAllNotes  = [C, D, E, F, G, A, B, Df, Ef, Gf, Af, Bf]