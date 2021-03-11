//define all the necessary variables and a second constant
const interval = 1000; // 1000ms
const clock = document.querySelector('.clock');
const day = document.querySelector('.weekday');
const body = document.getElementById('body');
const header = document.querySelector('.title_container');
const footer = document.querySelector('.footer');
const clockContainer = document.querySelector('.clock_container');

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

function setThemeBasedOnDayHours(hour) {
	//verify hour to change the theme
	if (hour >= 0 && hour <= 4) {
		setLatenightTheme();
	} else if (hour <= 11) {
		setMorningTheme();
	} else if (hour <= 18) {
		setEveningTheme();
	} else {
		setNightTheme();
	}
}

//get the current time  and update the html clock
function updateClock() {
	const actualDate = new Date();

	const weekday = convertWeekdayNumberToName(actualDate.getDay());

	// update if isn't the same
	if (day.innerHTML != weekday) {
		day.innerHTML = weekday;
	}

	setThemeBasedOnDayHours(actualDate.getHours());

	const timeString = actualDate.toTimeString().slice(0, 8);

	//update the clock time
	clock.innerHTML = timeString;
}

function setLatenightTheme() {
	body.style.backgroundColor = '#120136';
	header.style.color = '#ffffff';
	footer.style.color = '#ffffff';
	clockContainer.style.color = '#40bad5';
}

function setMorningTheme() {
	body.style.backgroundColor = '#95F0EE';
	header.style.color = '#BFBFBF';
	footer.style.color = '#BFBFBF';
	clockContainer.style.color = '#eca0b6';
}

function setEveningTheme() {
	body.style.backgroundColor = '#511845';
	header.style.color = '#ff5733';
	footer.style.color = '#ff5733';
	clockContainer.style.color = '#c70039';
}

function setNightTheme() {
	body.style.backgroundColor = '#1f4068';
	header.style.color = '#ffffff';
	footer.style.color = '#ffffff';
	clockContainer.style.color = '#e43f5a';
}

//remove 1 second delay to first update of clock
updateClock();

//infinite loop that executes the updateClock function every second(declarated as a const at the top)
setInterval(updateClock, interval);
