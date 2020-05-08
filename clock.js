//clock implementation

//define all the necessary variables to store acutal dates
let actualDate, hours, minutes, seconds, weekday

//define a constant for the miliseconds into one second
const second = 1000

//define a list of the week days from the first day (access by [0]) to the last day (access by [6])
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//get clock structure on html
const clock = document.querySelector(".clock")

//get weekday structure on html
const day = document.querySelector(".weekday")

//get the current time  and update the html clock
function updateClock() {
  actualDate = new Date()

  //for  weekday updates
  // store the actual week day, getting the list item from position of the actual day
  //cause the function getDay returns the number of the week day (0 to 6), so the list is in the corresponding order
  //and we can use it like the index of the list
  weekday = daysOfWeek[actualDate.getDay()]
  
  //if the text into the html structure day is different than the current day of the week
  if (day.innerHTML != weekday) {
    day.innerHTML = weekday
  }
  

  //split in hour, minute and second
  //and if it is not greater or equal to ten it wont have the left zero (like 1, 2, 3 and we want 01, 02, 03)
  //so put a zero at the left

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

//remove the 1 second delay of first update (when the page loads)
updateClock()

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, second)
