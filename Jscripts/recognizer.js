if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
	var recognizer = new webkitSpeechRecognition();
	recognizer.continuous = true;
	recognizer.interimResults = true;

	recognizer.onstart = function() {
	};

	recognizer.onend = function() {
	};

	recognizer.onresult = function(event) {
		document.getElementById("txtid").value = "Processing result";
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				document.getElementById("txtid").value = event.results[i][0].transcript;
				if (event.results[i][0].transcript.toLowerCase() == "next step") {
					gotDone();
				}
			}
		}	
	};

	recognizer.onerror = function(event) {
		document.getElementById("txtid").value = event.error;
 	}

}


function startRecognizer(event) {
	recognizer.start();
}

function stopRecognizer(event) {
	recognizer.stop();
}

function gotDone() {
	var dst = document.getElementById("txt2id");

	dst.value = "Next Step";
}
