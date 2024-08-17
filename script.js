let clickCount = 0;
let isCounting = false;
let countdownTime = 10;

document.getElementById("clickButton").addEventListener("click", function() {
    if (isCounting) {
        clickCount++;
        document.getElementById("clickCount").innerText = clickCount;
    }
});

document.getElementById("startButton").addEventListener("click", function() {
    clickCount = 0;
    countdownTime = 10;
    document.getElementById("clickCount").innerText = clickCount;
    document.getElementById("clickPerSecond").innerText = 0;
    document.getElementById("countdown").innerText = countdownTime;
    isCounting = true;

    const countdownInterval = setInterval(() => {
        countdownTime--;
        document.getElementById("countdown").innerText = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            isCounting = false;
            const clicksPerSecond = clickCount / 10;
            document.getElementById("clickPerSecond").innerText = clicksPerSecond.toFixed(2);
            alert("10초가 경과했습니다!");
        }
    }, 1000); // 1초마다 호출
});