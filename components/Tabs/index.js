// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function Tabs(topics) {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent=`${topics}`;
    
    const tabLocation = document.querySelector(".topics");
    tabLocation.append(tabDiv);
   
    return tabDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function (response) {
      const tabTopic = response.data.topics;
      tabTopic.forEach((e,index)=>{
          setTimeout(() => {
               Tabs([e])
          }, 1000 * index);
         
      });
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });