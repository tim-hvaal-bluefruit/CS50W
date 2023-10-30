// 1. hello world pop up on click
function hello() {
    alert('Hello, World!');
}

// 2. counter increments and pops up on click
let counter = 10;
function count() {
    counter++;
    alert(counter);
}

// 3. manipulate dom - toggle hello and goodbye
const welcome = 'Hello!';
const goodbye = 'GoodBye!';
function toggleDom() {
    const heading = document.querySelector('h1');
    if (heading.innerHTML === welcome) {
        heading.innerHTML = goodbye;
    } else {
        heading.innerHTML = welcome;
    }
}

// 4. manipulate dom -
function incrementDom() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
    if (counter % 10 === 0)
        alert(`you've reached ${counter}!`);
}

// 5. manipulate dom - without JS in the the DOM ... run decrement as a callback on the button ID after the DOM Content Loaded
function decrementDom() {
    if (counter === 0) {
        return;
    }
    counter--;
    document.querySelector('h2').innerHTML = counter;
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#ID1').onclick = decrementDom;
})

// 6. get the name a user wrote in a form and return it an alert
function submitName(name) {
    alert(`hello ${name}`);
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector("#name").value;
        submitName(name);
    }
})

// 7. update the style on a button click
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#red').onclick = function () {
        document.querySelector('#hello').style.color = "red";
    }
    document.querySelector('#blue').onclick = function () {
        document.querySelector('#hello').style.color = "blue";
    }

})