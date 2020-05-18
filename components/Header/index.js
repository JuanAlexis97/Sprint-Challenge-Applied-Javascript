// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement("div");
    const headerSpan = document.createElement("span");
    const headerH1 = document.createElement("h1");
    const headerSpanTemp = document.createElement("span");

    headerDiv.classList.add("header");
    headerSpan.classList.add("date");
    headerSpanTemp.classList.add("temp");

    headerSpan.textContent = "March 28 2019";
    headerH1.textContent = "Lambda Times"
    headerSpanTemp.textContent = "98 degrees"

    headerDiv.append(headerSpan,headerH1,headerSpanTemp);
    const headerContainer = document.querySelector("div.header-container");
    headerContainer.append(headerDiv);
    return headerDiv;
}

Header();

