/*	// Klick auf Sleep Button, füllt die Energie wieder auf
	var goToSleep = function() {
		var sleep = 100;
		alert("Energy is full!");
		} */

	// Sinken der Fun-Bar
	function progressFunBar(a) {
		var bar = document.getElementById('funBar');
		bar.value = a;
		a--;
	var sink = setTimeout("progressFunBar("+a+")",300);
		if(a == 0){
	  	  bar.value = 0;
		clearTimeout(sink);
		}
	}
	
	// Sinken der Food-Bar
	function progressFoodBar(a) {
		var bar = document.getElementById('foodBar');
		bar.value = a;
		a--;
	var sink = setTimeout("progressFoodBar("+a+")",300);
		if(a == 0){
	  	  bar.value = 0;
		clearTimeout(sink);
		}
	}
	
	// Sinken der Sleep-Bar
	function progressSleepBar(a) {
		var bar = document.getElementById('sleepBar');
		bar.value = a;
		a--;
	var sink = setTimeout("progressSleepBar("+a+")",300);
		if(a == 0){
	  	  bar.value = 0;
		clearTimeout(sink);
		}
	}
	
		// Sinken der Health-Bar
	function progressHealthBar(a) {
		var bar = document.getElementById('healthBar');
		bar.value = a;
		a--;
	var sink = setTimeout("progressHealthBar("+a+")",300);
		if(a == 0){
	  	  bar.value = 0;
		clearTimeout(sink);
		}
	}