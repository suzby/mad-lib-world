/*

input into an array
    listen for button click 
    push input to userInput array
output concat


*/

const storySection = document.getElementById('completed-story');
const madLibForm = document.getElementById('madlib-form')

const submitmadlib = (event) => {
    event.preventDefault()
    madLibForm.classList.add('hide')
    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

 const story = `<h3>Your story</h3>
 <p>Winter is one of <span class="inserted-text">${userSubmission.number}</span> seasons of the year. The other seasons are <span class="inserted-text">${userSubmission.adjective_1}</span>, <span class="inserted-text">${userSubmission.noun_1}</span>, and <span class="inserted-text">${userSubmission.noun_2}</span>. Winter is the time of year when the <span class="inserted-text">${userSubmission.noun_3}</span> is furthest from the earth. The weather tens to be <span class="inserted-text">${userSubmission.adjective_2}</span> in winter, with <span class="inserted-text">${userSubmission.noun_4}</span> fall and cold temperatures. Some winter sports include <span class="inserted-text">${userSubmission.verbing_1}</span>, <span class="inserted-text">${userSubmission.verbing_2}</span>, and <span class="inserted-text">${userSubmission.verbing_3}</span>. Hot <span class="inserted-text">${userSubmission.beverage}</span> with <span class="inserted-text">${userSubmission.food}</span> on top is a popular winter drink.</p>`

storySection.innerHTML += story;
storySection.classList.remove('hide')

let resetButton = `<button id="madlib-reset" onclick="resetMadLib()">Play Again</button>`
storySection.innerHTML += resetButton

}

const resetMadLib = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = "";
    madLibForm.reset();
    madLibForm.classList.remove('hide');
}
