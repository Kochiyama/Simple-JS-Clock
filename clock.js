//clock implementation

//define all the necessary variables and a second constant
let actualDate, hours, minutes, seconds, weekday
const second = 1000
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//get clock structure on html
const clock = document.querySelector(".clock")

//get weekday structure on html
const day = document.querySelector(".weekday")

//get the current time  and update the html clock
function updateClock() {
  actualDate = new Date()

  //for  weekday updates
  weekday = daysOfWeek[actualDate.getDay()]
  if (day.innerHTML != weekday) {
    day.innerHTML = weekday
  }
  
  //split in hour, minute and second
  //and if it is not greater or equal to ten it wont have the left zero (like 1, 2, 3 and we want 01, 02, 03), so put a zero at the left

  hours = actualDate.getHours()

  //verify hour to change the theme
  if (hours >= 0 & hours <= 4) {
    latenight()
  }
  else if (hours >= 5 & hours <= 11) {
    morning()
  }
  else if (hours >= 12 & hours <= 18) {
    evening()
  }
  else {
    night()
  }

  if (hours < 10) {
    hours = "0" + hours
  }
  
  minutes = actualDate.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  
  seconds = actualDate.getSeconds()
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  
  //format clock time
  time = hours + ":" + minutes + ":" + seconds

  //update the clock time
  clock.innerHTML = time
} 

var body = document.getElementById("body");
var header = document.querySelector(".title_container");
var footer = document.querySelector(".footer");
var clockContainer = document.querySelector(".clock_container")

function latenight () {
  body.style.backgroundColor = "#120136";
  header.style.color = "#ffffff";
  footer.style.color = "#ffffff";
  clockContainer.style.color = "#40bad5";
}

function morning() {
  body.style.backgroundColor = "#95F0EE";
  header.style.color = "#BFBFBF";
  footer.style.color = "#BFBFBF";
  clockContainer.style.color = "#eca0b6";
}

function evening() {
  body.style.backgroundColor = "#511845";
  header.style.color = "#ff5733";
  footer.style.color = "#ff5733";
  clockContainer.style.color = "#c70039";
}

function night() {
  body.style.backgroundColor = "#1f4068";
  header.style.color = "#ffffff";
  footer.style.color = "#ffffff";
  clockContainer.style.color = "#e43f5a";
}

//remove 1 second delay to first update of clock
updateClock()

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, second)


