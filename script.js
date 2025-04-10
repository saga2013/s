const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const text = document.getElementById("input").value;
    const lang = document.getElementById("select").value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.5;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
});