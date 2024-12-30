let counter = 0;
let startTime = Date.now();

const span = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');
const span2 = document.getElementById('clicker__timer')

img.onclick = () => {
    counter++;
    span.textContent = counter;
    let currentTime = Date.now();
    span2.textContent = (1000 / (currentTime - startTime)).toFixed(2);
    startTime = currentTime;

    img.width *= 1.1;
    img.height *= 1.1;
    setTimeout(() => {
        img.width /= 1.1;
        img.height /= 1.1;
    }, 250);
};
