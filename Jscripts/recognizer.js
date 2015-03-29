var currentStep;

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
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				if (event.results[i][0].transcript.toLowerCase() == "next step") {
					gotDone();
					stopRecognizer();
				}
			}
		}	
	};

	recognizer.onerror = function(event) {
		document.getElementById("txtid").value = event.error;
 	}

}


function startRecognizer() {
	recognizer.start();
}

function stopRecognizer() {
	recognizer.stop();
}

function gotDone() {
	return currentStep++;
}
