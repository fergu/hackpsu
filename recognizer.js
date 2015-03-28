var recognizer = new webkitSpeechRecognition();
recognizer.continuous = true;
recognizer.interimResults = true;
recognizer.lang = “en”;

function startRecognizer() {
	recognizer.start();
}

function stopRecognizer() {
	recognizer.stop();
}
