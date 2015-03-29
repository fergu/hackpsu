var currentStep=0;
var isListening=false;

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
	var recognizer = new webkitSpeechRecognition();
	recognizer.continuous = true;
	recognizer.interimResults = false;

	recognizer.onstart = function() {
	};

	recognizer.onend = function() {
	};

	recognizer.onresult = function(event) {
		console.log("Got result");
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				console.log(event.results[i][0].transcript);
				if (event.results[i][0].transcript.toLowerCase().indexOf("next step") > -1) {
					gotDone();
				}
			}
		}	
	};

	recognizer.onerror = function(event) {
 	}

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
		speakText("Recipe Finished");
		return;
	}
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
