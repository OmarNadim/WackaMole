const grid = document.getElementById("grid")
const timeDisplay = document.getElementById("time")
const scoreDisplay = document.getElementById("score")

let time = 10;
let score = 0;

createBoard()

timeDisplay.innerText = `Time: ${time} seconds`



const setIntervalId = setInterval(()=>{
    scoreDisplay.innerText = `Score: ${score}`
    const moles = document.querySelectorAll("img")
    const id = Math.floor(Math.random()*9)
    moles[id].classList.remove("hide")
    setTimeout(()=>{
        moles[id].classList.add("hide")
        time--
        timeDisplay.innerText = `Time: ${time} seconds`
        if(time === 0){
        clearInterval(setIntervalId);
        grid.innerHTML = `<h1>Time is up &#x231B</h1>`
    } 
    },700)      
},1000)   




function whac(){
    const moleId = this.getAttribute("id")
    if(moleId){
        score++;
    }
}

function createBoard(){
    for(let i=0; i<9; i++){
        const mole = document.createElement("div")
        mole.className = "mole"
        const img = document.createElement("img")
        img.setAttribute("src", "images/mole.png")
        img.className = "hide"
        img.setAttribute("id",i)
        img.addEventListener("click",whac)
        mole.appendChild(img)
        grid.appendChild(mole)
    }
}

