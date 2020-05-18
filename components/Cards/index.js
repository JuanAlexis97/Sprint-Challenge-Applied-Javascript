// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function Cards(headline,authorName,authorPhoto){
    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContDiv = document.createElement("div");
    const innerImg  = document.createElement("img");
    const cardSpan = document.createElement("span");


    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContDiv.classList.add("img-container");

    headlineDiv.textContent= `${headline}`;
    innerImg.src=`${authorPhoto}`;
    cardSpan.textContent=`${authorName}`;

    cardDiv.append(headlineDiv,authorDiv);
    authorDiv.append(imgContDiv,cardSpan);
    imgContDiv.append(innerImg);
    const cardCont = document.querySelector(".cards-container");
    cardCont.append(cardDiv);
    return cardDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (response) {
    const articles = response.data.articles;
    articles.javascript.forEach((e,index)=>{
        setTimeout(()=>{Cards(e.headline,e.authorName,e.authorPhoto)},1000*index)
    });
    articles.technology.forEach((e,index)=>{
        setTimeout(()=>{Cards(e.headline,e.authorName,e.authorPhoto)},1000*index)
    });
    articles.node.forEach((e,index)=>{
        setTimeout(()=>{Cards(e.headline,e.authorName,e.authorPhoto)},1000*index)
    });
    articles.jquery.forEach((e,index)=>{
        setTimeout(()=>{Cards(e.headline,e.authorName,e.authorPhoto)},1000*index)
    });
    articles.bootstrap.forEach((e,index)=>{
        setTimeout(()=>{Cards(e.headline,e.authorName,e.authorPhoto)},1000*index)
    });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });