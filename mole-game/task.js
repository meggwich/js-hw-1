let oldActiveHole = null;
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;
let killed = true;


for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    if (hole.classList.contains('hole_has-mole')) {
        oldActiveHole = i;
    }
}

const next = () => {
    let newActiveHole;
    
    if (!killed) {
        lostCounter += 1;
    }

    killed = false;



    do {
        newActiveHole = Math.floor(1 + Math.random() * 9);
    } while (newActiveHole === oldActiveHole);

    const oldMole = document.getElementById(`hole${oldActiveHole}`);
    const newMole = document.getElementById(`hole${newActiveHole}`);
    newMole.classList.add('hole_has-mole'); 
    oldMole.classList.remove('hole_has-mole');



    newMole.onclick = () => {
        killed = true;
        deadCounter += 1;
    };



    oldActiveHole = newActiveHole;
    dead.textContent = deadCounter;
    lost.textContent = lostCounter; 

    if (lostCounter >= 5) {
        alert('Вы проиграли!');
        deadCounter = 0;
        lostCounter = 0;

    }

    
    if (deadCounter == 10) {
        alert('Победа!');
        deadCounter = 0;
        lostCounter = -1;
    }

}


setInterval(next, 1000);

