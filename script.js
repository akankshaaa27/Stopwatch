let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start() {
    timer = true;
    myFun();
}

function stop() {
    timer = false;
}

function reset() {
    location.reload();
}

function myFun() {
    if (timer) {
        milli++;

        if (milli === 100) {
            sec++;
            milli = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
        }

        let getSec = sec < 10 ? "0" + sec : sec;
        let getMin = min < 10 ? "0" + min : min;
        let getHr = hr < 10 ? "0" + hr : hr;

        document.getElementById("milli").innerHTML = milli;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("min").innerHTML = getMin;
        document.getElementById("hr").innerHTML = getHr;

        setTimeout(myFun, 10);
    }
}
