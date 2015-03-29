var currentStep=0;
var isListening=false;

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
	var recognizer = new webkitSpeechRecognition();
	recognizer.continuous = true;
	recognizer.interimResults = false;

	recognizer.onstart = function() {
		document.getElementById("listenstatus").innerHTML = "<i>Listening...</i>";
	};

	recognizer.onend = function() {
		document.getElementById("listenstatus").innerHTML = "<i>Speech Recognizer Stopped.</i>";
	};

	recognizer.onresult = function(event) {
		console.log("Got result");
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				console.log(event.results[i][0].transcript);
				document.getElementById("listenstatus").innerHTML = "<i>Listening...</i>";
				if (event.results[i][0].transcript.toLowerCase().indexOf("next step") > -1) {
					gotDone();
				} else if (event.results[i][0].transcript.toLowerCase().indexOf("last step") > -1) {
					goToLastStep();
				} else if (event.results[i][0].transcript.toLowerCase().indexOf("say again") > -1) {
					repeatStep();
				} else if (event.results[i][0].transcript.toLowerCase().indexOf("stop reading") > -1) {
					speakText("Stopping voice interaction");
					stopListening();
				} else if (event.results[i][0].transcript.toLowerCase().indexOf("say ingredients") > -1) {
					sayIngredients();
				} else {
					document.getElementById("listenstatus").innerHTML = "<i>Didn't hear a command.<br>Try Again</i>";
				}

			}
		}	
	};

	recognizer.onspeechend = function () {
		document.getElementById("listenstatus").innerHTML = "<i>Processing...</i>";
	}

	recognizer.onspeechstart = function() {
		document.getElementById("listenstatus").innerHTML = "<i>Listening...</i>";
	}

	recognizer.onerror = function(event) {
		document.getElementById("listenstatus").innerHTML = "<i>Error...</i>";
 	}

}

function sayIngredients() {
	var ingr = "Your ingredients are ";

	for (i=0; i<ings.length;i++) {
		ingr = ingr.concat(ings[i].getAttribute("quantity"), ings[i].getAttribute("name"));
		if (i+1 < ings.length) {
			ingr = ingr.concat(", and ");
		}
	}
	speakText(ingr);
}

function startListening() {
	console.log("Want to start listening");
	if (isListening == true) {
		console.log("Already listening. Ignoring.");
		return;
	}

	isListening = true;
	recognizer.start();
}

function stopListening() {
	console.log("Want to stop");	
	console.log(isListening);
	if (isListening == false) {
		console.log("Already stopped. Ignoring.");
		return;
	}
	isListening = false;
	recognizer.abort();
}

function readyToRead() {
	var msg = "Step ";
	msg = msg.concat(currentStep+1, " ", CurrentRecipe.steps[currentStep].childNodes[0].nodeValue );
	speakText(msg);
	startListening();
}

function gotDone() {
	console.log("Moving to next step");
	currentStep++;
	if (currentStep == CurrentRecipe.steps.length) {
		stopListening();
		speakText("Recipe Finished. Goodbye.");
		return;
	}
	readyToRead();
}

function repeatStep() {
	console.log("Repeating this step");
	readyToRead();
}

function goToLastStep() {
	console.log("Going to previous step");
	currentStep--;
	readyToRead();
}

function speakText(inText) {
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10];
	msg.voiceURI = 'native';
	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 2;
	msg.text = inText;
	msg.lang = 'en-US';

	speechSynthesis.speak(msg);
};
