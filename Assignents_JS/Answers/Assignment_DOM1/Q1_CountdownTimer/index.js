var countStart = document.getElementById('count_start_number')
var countDown = null


onStartPress = () => {
    let countStartValue = parseInt(countStart.value)
    countDown = setInterval(() => {
        countStartValue += 1
        countStart.value = countStartValue
    }, 1000);
}

onStopPress = () => {
    clearInterval(countDown)
}

document.getElementById('start_button').addEventListener('click', () => onStartPress())
document.getElementById('stop_button').addEventListener('click', () => onStopPress())

