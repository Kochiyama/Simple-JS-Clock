const themes = {
	latenight: {
		backgroundColor: '#120136',
		textColor: '#ffffff',
		clockColor: '#40bad5',
	},

	morning: {
		backgroundColor: '#95F0EE',
		textColor: '#BFBFBF',
		clockColor: '#eca0b6',
	},

	evening: {
		backgroundColor: '#511845',
		textColor: '#ff5733',
		clockColor: '#c70039',
	},

	night: {
		backgroundColor: '#1f4068',
		textColor: '#ffffff',
		clockColor: '#e43f5a',
	},
};

function setTheme(page, theme) {
	page.body.style.backgroundColor = theme.backgroundColor;
	page.header.style.color = theme.textColor;
	page.footer.style.color = theme.textColor;
	page.clockContainer.style.color = theme.clockColor;
}

export default function setThemeBasedOnDayHours(hour, page) {
	//verify hour to change the theme
	if (hour >= 0 && hour <= 4) {
		setTheme(page, themes.latenight);
	} else if (hour <= 11) {
		setTheme(page, themes.morning);
	} else if (hour <= 18) {
		setTheme(page, themes.evening);
	} else {
		setTheme(page, themes.night);
	}
}
