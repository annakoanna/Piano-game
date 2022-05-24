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
function checkNotes(arr) {

}
const levelOneNotes = ["C", "E", "C", "C", "E", "C", "D", "C", "E", "E", "D", "C"]
const levelTwoNotes = ["E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "E", "D", "D", "E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "D", "C", "C" ]
const levelTreeNotes = [ "A", "B", "A", "B", "C", ]
const levelFourBlacknotes = [Df, Ef, Gf, Af, Bf]
const levelfiveAllNotes  = [C, D, E, F, G, A, B, Df, Ef, Gf, Af, Bf]
for(i = 0; i < arr.length; i ++) {

}


//document.querySelector("#restart").addEventListener('click', function(){
    //window.location.reload();