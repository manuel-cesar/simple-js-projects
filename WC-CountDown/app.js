const months = [
    "January",
    "February",
    "March", 
    "April", 
    "May",
    "June",
    "July",
    "August",
    "September", 
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

];


const nextMatch = document.querySelector('.next-match');
const deadline = document.querySelector('.deadline');
const timeBoxes = document.querySelectorAll('.deadline-format h4');

let nextDate = new Date(2022,10,20,13,00);

const year = nextDate.getFullYear();
const hours = nextDate.getHours();
const minutes = nextDate.getMinutes();

const month = months[nextDate.getMonth()];
const date = nextDate.getDate();
const weekday = weekdays[nextDate.getDay()];

nextMatch.textContent = `Next Match starts on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} UTC -3`

//Future time in miliseconds
// 1 sec = 1000ms 
// 1min = 60s
// 1hr = 60 min
// 1d = 24hr
// --- times In ms ---
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMin = 60 * 1000;

const futureTime = nextDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const timeLeft = futureTime - today;

    let daysLeft = Math.floor(timeLeft / oneDay);
    let hoursLeft = Math.floor(timeLeft % oneDay / oneHour);
    let minutesLeft = Math.floor(timeLeft % oneHour / oneMin); 
    let secondsLeft = Math.floor(timeLeft % oneMin / 1000);

    //Set deadline array
    const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

    function format(item){
        if(item < 10)
            return (item = `0${item}`);
        else
            return item;
    }

    timeBoxes.forEach(function (item, index){
        item.innerHTML = format(values[index]);
    })

    if (timeLeft < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this Cup has finished :(</h4>`
    }

}


//Countdown -- Refresh every second
let countdown = setInterval(getRemainingTime,1000);
