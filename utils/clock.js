function timer() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    let clock = document.querySelector(".clock").innerHTML = hours + ":" + minutes + ":" + seconds
    setTimeout(timer, 1000)
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
timer();

export default timer;