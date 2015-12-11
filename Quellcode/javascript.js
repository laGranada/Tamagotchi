	var startFunBar = true;
	
	// Sinken der Fun-Bar
	
	  function progressFunBar(a) {
		if (startFunBar == true) {
		var bar = document.getElementById('funBar');
		bar.value = a;
		a--;
		
		/*
		* === Feedback Alpers, Dez 11 ===
		* 
		* Tabulatoren sind dafür da, um erkennbar zu machen, welche Teile des Programms
		* zu einer Methode gehören.
		*
		* Indem Sie oben den Inhalt des if-Cases nicht eingerückt haben,
		* sieht es aus, als wenn var bar = ... nicht Teil des (startFunBar == ...)-Falls wäre.
		* Das gleiche gilt hier für var sink = ...: Hier wirkt es so, als wenn diese Zeile nicht zu
		* progressFunBar() gehören würde.
		*
		* === Feedback Alpers, Ende ===
		*/
		
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
	
	/*
	* === Feedback Alpers, Dez 11 ===
	*
	* Hinweis, um leichter zu überarbeitenden Code zu erhalten:
	*
	* Diese drei Funktionen sind annähernd identisch. In solchen Fällen sollten Sie
	* die identischen Teile in jeweils eine Funktion auslagern und dann diese Funktionen
	* aufrufen. Denn wenn Sie später Änderungen durchführen müssen (und das ist eigentlich
	* immer irgendwann der Fall), dann müssen Sie bei dieser Variante die Änderung nur einmal
	* durchführen, wohingegen Sie bei Ihrem Vorgehen jede Änderung mehrfach durchführen müssen,
	* was im Schlimmsten Fall zu massiver Fehleranfälligkeit führt.
	*
	* === Feedback Alpers, Ende ===
	*/

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
	
	/*
	* === Feedback Alpers, Dez 11 ===
	*
	* Das ist zwar noch etwas wenig für den Leistungsnachweis im Projekt, aber Sie sind auf einem guten Weg.
	*
	* === Feedback Alpers, Ende ===
	*/