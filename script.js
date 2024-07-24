const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = "AM";

    if (h > 12) {
        h = h - 12
        am_pm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    hour.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    ampm.innerText = am_pm

}
setInterval(() => {
    clock();
}, 1000) ;















