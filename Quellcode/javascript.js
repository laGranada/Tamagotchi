	var startFunBar = true;
	
	// Sinken der Fun-Bar
	
	  function progressFunBar(a) {
		if (startFunBar == true) {
		var bar = document.getElementById('funBar');
		bar.value = a;
		a--;
	var sink = setTimeout("progressFunBar("+a+")",300);
		if(a == 0){
	  	  bar.value = 0;
		clearTimeout(sink);
		}
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

	// playground: Spielauswahl füllt die Fun-Bar wieder auf
	var letsPlay = function() {
		startFunBar = false;
		alert("Yeah! That was funny!");
		// Hier muss die Food-Bar aufgefüllt werden
	}
	
	// kitchen: Essensauswahl füllt die Food-Bar wieder auf
	var eatSomething = function() {
		alert("That was tasty!");
		// Hier muss die Food-Bar aufgefüllt werden
	}
	
	// bedroom: Sleep Button füllt die Energie wieder auf
	var goToSleep = function() { 
		alert("Energy is full!");
		// Hier muss die Sleep-Bar wieder aufgefüllt werden
	}