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

//remove 1 second delay to first update of clock
updateClock()

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, second)
