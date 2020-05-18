/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(){
  const mainDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const firstImg = document.createElement("img");
  const secondImg = document.createElement("img");
  const thirdImg = document.createElement("img");
  const fourthImg = document.createElement("img");
  const secButtonDiv = document.createElement("div");

  mainDiv.classList.add("carousel");
  buttonDiv.classList.add("left-button");
  firstImg.src=("./assets/carousel/mountains.jpeg");
  secondImg.src=("./assets/carousel/computer.jpeg");
  thirdImg.src =("./assets/carousel/trees.jpeg");
  fourthImg.src=("./assets/carousel/turntable.jpeg");

  buttonDiv.textContent="<";
  secButtonDiv.textContent=">";

  mainDiv.append(buttonDiv,firstImg,secondImg,thirdImg,fourthImg,secButtonDiv);

  const carCont = document.querySelector("carousel-container");
  carCont.append(mainDiv);

  return  mainDiv;
  
}

Carousel();