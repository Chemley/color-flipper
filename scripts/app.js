const colors = ['green', 'red', 'rgba(113,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get a random number between 0 and 3 (based on the number of items in the colors array above) colors[3]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; // changes the text in the span.
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);