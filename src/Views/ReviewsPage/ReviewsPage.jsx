import "./reviewsPage.css";

export const ReviewsPage = () => {
  function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  async function getAllReviews() {
    var response = await fetch("/crudReviews");
    var data = await response.text();
    var reviews = JSON.parse(data);

    if (!document.getElementById("cards").hasChildNodes()) {
      for (var i = 0; i < Object.keys(reviews).length; i++) {
        var review = reviews[i];
        var reviewDiv = htmlToElement(`
        <div class="card">
          <div class="card--image">
            <img src="${import.meta.env.VITE_IMG_URL}${
          review[8]
        }" alt="" width=200px>
          </div>
  
          <div class="anotherContainer">
          <div class="card--content">
          
          <h3 class="card--content--title">${review[1]}</h3>
          <div class="yetanotherContainer">
             <div class="card--location">
              <p class="card--content--location">${review[7]}</p>
             </div>
  
                <p class="card--content--author">${review[2]}</p>
             </div>
                <p class="card--content--date">${review[5].slice(0, 10)}</p>
  
          </div>
          <div class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-em_brown hover:bg-em_brown_hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-em_brown">
              <a class="card--action" href="/Review/${review[0]}">See</a>
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
        <div className="flex flex-row justify-between items-center w-full pt-0">
          <p className="mt-1 text-4xl font-extrabold text-em_brown sm:text-3xl sm:tracking-tight lg:text-6xl mr-5">
            Reviews
          </p>
          {sessionStorage.getItem("userName") != null ? (
            <a
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full shadow-sm text-em_white bg-em_brown hover:bg-em_brown_hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:em_orange_hover text-center"
              href="/Reviews/Create"
            >
              Create Review
            </a>
          ) : (
            <a
              className="ml-1 inline-flex items-center px-5 py-1 text-base font-medium rounded-full shadow-sm text-em_white bg-em_orange hover:em_orange_hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:em_orange_hover text-center"
              href="/Login"
            >
              Login to leave a review
            </a>
          )}
        </div>
        <div id="cards" className="cards"></div>
      </div>
    </div>
  );
};
