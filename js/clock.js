const clock = document.querySelector("#clock");
const day = clock.querySelector(".day");
const time = clock.querySelector(".time");


function getTime(){
    const date = new Date();
    const hours = getHour();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    time.innerText = `${hours}:${minutes}:${seconds}`;
}

function getHour(){
    const date = new Date();
    const hours = String(date.getHours());
    let result;

    if(11 >= hours && hours >= 0){
        result = `오전 ${hours}`;
    } else if(23 >= hours && hours >= 12) {
        result = `오후 ${String(Number(hours) - 12)}`;
    }

    return result;
}

function getDay(){
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth() + 1);
    const dates = String(date.getDate());
    const days = getDays();

    day.innerText = `${years}년 ${months}월 ${dates}일 ${days}요일`;
}

function getDays(){
    const date = new Date();
    let days = date.getDay();
    if(days === 0){
        days = "월"
    } else if(days === 1){
        days = "화"
    } else if(days === 2){
        days = "수"
    } else if(days === 3){
        days = "목"
    } else if(days === 4){
        days = "금"
    } else if(days === 5){
        days = "토"
    } else if(days === 6){
        days = "일"
    }
    return days;
}

getDay();
getTime();
setInterval(getTime, 1000);
setInterval(getDay, 1000);