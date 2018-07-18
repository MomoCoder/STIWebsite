// for the current date
var currentDate = new Date();
// when the windows load it will perform this
window.onload = function() {
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