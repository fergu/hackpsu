function speakText(inText) {
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[10];
	msg.voiceURI = 'native';
	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 2;
	msg.text = document.getElementById("txt2id").value;
	msg.lang = 'en-US';

	speechSynthesis.speak(msg);
};
