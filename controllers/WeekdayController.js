const weekdayDictionary = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export default function convertWeekdayNumberToName(weekdayNumber) {
	return weekdayDictionary[weekdayNumber];
}
