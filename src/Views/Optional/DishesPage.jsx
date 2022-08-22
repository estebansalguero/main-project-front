import "./optionalPage.css";

export const DishesPage = () => {
  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  async function getAllReviews() {
    var response = await fetch("/optionalDBDish");
    var data = await response.text();
    var reviews = JSON.parse(data);
    if (!document.getElementById("cards").hasChildNodes()) {
      for (var i = 0; i < Object.keys(reviews).length; i++) {
        var review = reviews[i];
        var reviewDiv = htmlToElement(`
        <div class="card">  
          <div class="anotherContainer">
          <div class="card--content">
          
          <h3 class="card--content--title">${review[8]}</h3>
          <div class="yetanotherContainer">
             <div class="card--location">
              <p class="card--content--location">${review[1]}</p>
             </div>
                <p class="card--content--author">${review[7]}</p>
             </div>
             <div class="card-info">
                <p class="card--content--info">${review[2]} 🥟</p>
                <p class="card--content--info">${review[3]} / 10 💸</p>
                <p class="card--content--info">₡ ${review[9]} </p>
             </div> 
          </div>
          </div>
        </div>`);
        document.getElementById("cards").appendChild(reviewDiv);
      }
    }
  }
  getAllReviews();
  return (
    <div className="flex flex-col items-center justify-center h-content min-w-0 pt-5 bg-em_white">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row justify-between items-center w-full p-4">
          <p className="mt-1 text-5xl font-extrabold text-em_brown sm:tracking-tight mr-5 ">
            Recommended Dishes
          </p>
        </div>
        <div id="cards" className="cards"></div>
      </div>
    </div>
  );
};
