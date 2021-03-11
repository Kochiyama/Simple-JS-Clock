import setThemeBasedOnDayHours from './controllers/ThemeController.js';
import convertWeekdayNumberToName from './controllers/WeekdayController.js';

// Create an object page, with all the html elements that we manipulate
const page = {
	clock: document.querySelector('.clock'),
	weekday: document.querySelector('.weekday'),
	body: document.getElementById('body'),
	header: document.querySelector('.title_container'),
	footer: document.querySelector('.footer'),
	clockContainer: document.querySelector('.clock_container'),
};

//get the current time  and update the html clock
function updateClock() {
	const actualDate = new Date();
	const weekday = convertWeekdayNumberToName(actualDate.getDay());
	const timeString = actualDate.toTimeString().slice(0, 8);

	setThemeBasedOnDayHours(actualDate.getHours(), page);

	// update if isn't the same
	if (page.weekday.innerHTML != weekday) {
		page.weekday.innerHTML = weekday;
	}

	//update the clock time
	page.clock.innerHTML = timeString;
}

//remove 1 second delay to first update of clock
updateClock();

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, 1000);
