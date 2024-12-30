//Основное задание

const span = document.getElementById('timer');

const intervalId = setInterval(() => {
    const currentValue = Number(span.textContent);
    if (currentValue > 0) {
        span.textContent = currentValue - 1;
    } else {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
}, 100);


//Повышенный уровень сложности #1

/*
function startTimer(display) {
    let [hours, minutes, seconds] = display.textContent.split(':').map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const intervalId = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            alert('Вы победили в конкурсе!');
            return;
        }

        totalSeconds--;

        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;

        display.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 100);
}

window.onload = () => {
    const display = document.getElementById('timer1');
    startTimer(display);
};*/

//Повышенный уровень сложности #2

/*
function startTimer(display) {
    let [hours, minutes, seconds] = display.textContent.split(':').map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const intervalId = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            alert('Вы победили в конкурсе!');
            // Запуск загрузки произвольного файла
            window.location.href = 'https://example.com/yourfile.zip';
            return;
        }

        totalSeconds--;

        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;

        display.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 100);
}

window.onload = () => {
    const display = document.getElementById('timer1');
    startTimer(display);
};
*/