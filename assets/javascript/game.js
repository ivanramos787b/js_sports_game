let shootTeam1 = document.querySelector("#teamone-shoot-button");
let shotstakenteam1 = document.querySelector("#teamone-numshots");
let team1goal = document.querySelector("#teamone-numgoals");


shootTeam1.addEventListener("click", function () {
    if (Math.random() * 150 < 80) {
        let kicksteam1 = Number(team1goal.innerHTML) + 1;
        team1goal.innerHTML = kicksteam1;
       console.log("Team 1 goal")
        }
    console.log("team 1 shot"); 
let kicksteam1 = Number(shotstakenteam1.innerHTML) + 1;
shotstakenteam1.innerHTML = kicksteam1;
});


let shootTeam2 = document.querySelector("#teamtwo-shoot-button");
let shotstakenteam2 = document.querySelector("#teamtwo-numshots");
let team2goal = document.querySelector("#teamtwo-numgoals");


shootTeam2.addEventListener("click", function () {
    if (Math.random() * 150 < 80) {
        let kicksteam2 = Number(team2goal.innerHTML) + 1;
        team2goal.innerHTML = kicksteam2;
        console.log("team 2 goal");
    }
        console.log("team 2 shot");
 let kicksteam2 = Number(shotstakenteam2.innerHTML) + 1;
shotstakenteam2.innerHTML = kicksteam2;
});

let jsgamereset = document.querySelector("#reset-button");
let resetpressed = document.querySelector("#num-resets");
jsgamereset.addEventListener("click", function () {
    
    let kicksteam1 = Number(team1goal.innerHTML) * 0;
    team1goal.innerHTML = kicksteam1;

    kicksteam1 = Number(shotstakenteam1.innerHTML) * 0;
shotstakenteam1.innerHTML = kicksteam1;
        
    let kicksteam2 = Number(team2goal.innerHTML) * 0;
        team2goal.innerHTML = kicksteam2;

        kicksteam2 = Number(shotstakenteam2.innerHTML) * 0;
shotstakenteam2.innerHTML = kicksteam2;
    
        console.log("Reset has been pressed");

    let rbuttonpressed = Number(resetpressed.innerHTML) + 1;
resetpressed.innerHTML = rbuttonpressed;
})

