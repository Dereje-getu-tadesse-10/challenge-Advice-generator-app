const track = document.querySelector("#track");
const advice = document.querySelector("#advice");
const getAdvice = document.querySelector(".greenCircle");
const url = `https://api.adviceslip.com/advice`;
let countAdvice = 0;

// function with parameter
const apiCall = (link) => {
  fetch(link)
    .then((responses) => {
      return responses.json();
    })
    .then((data) => {
      // add advice into html element
      advice.textContent = `“${data.slip.advice}”`;
      track.textContent = `ADVICE #${data.slip.id}`;
    });
};

// button for get another advice on click
getAdvice.addEventListener("click", () => {
  apiCall(url);
  countAdvice += 1;
  console.log(
    `%cYou generated ${countAdvice} advice`,
    "background-color:hsl(217, 19%, 38%); padding:10px; color:white; border-radius:.5em"
  );
});

// call function for get advice
apiCall(url);
