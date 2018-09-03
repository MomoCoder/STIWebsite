
// when the windows load it will perform this
window.onload = function() {

	// for the current date
	var currentDate = new Date();

	// to display the time
	var displayTime = document.getElementById('countDown');

	// for the diedLine
	var diedLine = new Date('Dec 10, 2018').getTime();

	// function for the countdown system
	function countDownSystem() {
		// to get the remaining days,hours,min,seconds before the diedline
		var remainingDate = diedLine - currentDate;

		// for the remaining days
		var days = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
		var hours = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((remainingDate % (1000 * 60)) / 1000);

		// final value and concatination
		var finalValue = days + 'd' + '\t' + hours + 'h' + '\t' + minutes + 'm' + '\t' + seconds + 's';

		// for final printing
		displayTime.innerHTML = finalValue;

		// if the countdown meet the diedline
		if (remainingDate < 0) {
			clearInterval();
			finalValue = 'Class already started';
		}
	}
	// make a function that will change every 1 sec
	setInterval(countDownSystem, 1000);
}

function comingSoon() {
	alert('This Page is still in development')
}

function fbClick() {
	var fbBox = confirm('Are you sure you ?');
	if (fbBox == true) {
		window.location.assign("https://www.facebook.com/sti.edu");
	} else {
		alert('Thank you for staying');
	}
}

function twClick() {
	var twBox = confirm('Are you sure you ?');
	if (twBox == true) {
		window.location.assign("https://twitter.com/sticollege?lang=en");
	} else {
		alert('Thank you for staying');
	}
}

function ytClick() {
	var ytBox = confirm('Are you sure you ?');
	if (ytBox == true) {
		window.location.assign("https://www.youtube.com/channel/UClwI5kKZkrUGSdyKaXCyacQ");
	} else {
		alert('Thank you for staying');
	}
}
