import setThemeBasedOnDayHours from './controllers/ThemeController.js';

//define all the necessary variables and a second constant
const interval = 1000; // 1000ms
const page = {
	clock: document.querySelector('.clock'),
	weekday: document.querySelector('.weekday'),
	body: document.getElementById('body'),
	header: document.querySelector('.title_container'),
	footer: document.querySelector('.footer'),
	clockContainer: document.querySelector('.clock_container'),
};

function convertWeekdayNumberToName(weekdayNumber) {
	const weekdayDictionary = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return weekdayDictionary[weekdayNumber];
}

//get the current time  and update the html clock
function updateClock() {
	const actualDate = new Date();

	const weekday = convertWeekdayNumberToName(actualDate.getDay());

	// update if isn't the same
	if (page.weekday.innerHTML != weekday) {
		page.weekday.innerHTML = weekday;
	}

	setThemeBasedOnDayHours(actualDate.getHours(), page);

	const timeString = actualDate.toTimeString().slice(0, 8);

	//update the clock time
	page.clock.innerHTML = timeString;
}

//remove 1 second delay to first update of clock
updateClock();

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, interval);
