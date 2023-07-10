const SpeechGrammarList = window.webkitSpeechGrammarList;
const SpeechRecognition = window.webkitSpeechRecognition;
const resultInp = document.getElementById("result-input-field");
const stateText = document.getElementById("state");
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function listen() {
  try {
    recognition.start();
    recognition.onstart = (event) => {
      stateText.innerText = "Listening...";
    };
    recognition.onresult = (event) => {
      const color = event.results[0][0].transcript;
      resultInp.value = color;
      stateText.innerText = "";
      recognition.stop();
    };
  } catch (error) {
    stateText.innerText = "";
    recognition.stop();
  }
}
