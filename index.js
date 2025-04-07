// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked");
    let countEl = document.getElementById("count-el");
    let currentCount = parseInt(countEl.textContent);
    countEl.textContent = currentCount + 1;
}

// ✅ Make it global so HTML can access it
window.increment = increment;
