function setLatenightTheme(page) {
	page.body.style.backgroundColor = '#120136';
	page.header.style.color = '#ffffff';
	page.footer.style.color = '#ffffff';
	page.clockContainer.style.color = '#40bad5';
}

function setMorningTheme(page) {
	page.body.style.backgroundColor = '#95F0EE';
	page.header.style.color = '#BFBFBF';
	page.footer.style.color = '#BFBFBF';
	page.clockContainer.style.color = '#eca0b6';
}

function setEveningTheme(page) {
	page.body.style.backgroundColor = '#511845';
	page.header.style.color = '#ff5733';
	page.footer.style.color = '#ff5733';
	page.clockContainer.style.color = '#c70039';
}

function setNightTheme(page) {
	body.style.backgroundColor = '#1f4068';
	page.header.style.color = '#ffffff';
	page.footer.style.color = '#ffffff';
	page.clockContainer.style.color = '#e43f5a';
}

export default function setThemeBasedOnDayHours(hour, page) {
	//verify hour to change the theme
	if (hour >= 0 && hour <= 4) {
		setLatenightTheme(page);
	} else if (hour <= 11) {
		setMorningTheme(page);
	} else if (hour <= 18) {
		setEveningTheme(page);
	} else {
		setNightTheme(page);
	}
}
