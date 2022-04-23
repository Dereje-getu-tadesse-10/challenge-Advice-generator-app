const track = document.querySelector('#track');
const advice = document.querySelector('#advice');
const getAdvice = document.querySelector('.greenCircle');
const url = `https://api.adviceslip.com/advice`;

// call api
const apiCall = () =>{

    fetch(url)
    .then((responses)=>{return responses.json()})
    .then((data)=>{
        console.log(data);
        advice.textContent = `“${data.slip.advice}”`;
        track.textContent = `ADVICE #${data.slip.id}`;
    });
}

// get another advice with 
getAdvice.addEventListener("click", ()=> {
   location.reload();
});

apiCall();