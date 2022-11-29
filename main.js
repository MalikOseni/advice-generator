const adviceSpace = document.getElementById('adviceSlip');
const adviceID = document.getElementById('adviceId');
const Btn = document.getElementById('switchBtn');
const superHero = () => {
    fetch('	https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => {
            adviceID.innerText=`${json.slip.id}`
        adviceSpace.innerText=`${json.slip.advice}`
            // console.log(json.slip.advice)
            const text = adviceSpace.innerText;
            const speech = new SpeechSynthesisUtterance(text);
            speech.pitch = 20;

            window.speechSynthesis.speak(speech);
    })
}
superHero()
Btn.addEventListener('click', () => superHero());