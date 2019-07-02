// variables
const searchForm = $("[data-target=search-form]");
const searchInput = $("[data-target=search-input]");
const movies = $("#movies");
// functions
function getApi(e) {
  e.preventDefault();
  let searchText = searchInput.val();
  let url = `https://api.themoviedb.org/3/search/multi?api_key=547af96e462fbc7597135bd797803004&language=en_US%20en_US&query=${searchText}`;
  requestApi("GET", url);
}

function requestApi(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.addEventListener("readystatechange", function(e) {
    if (xhr.readyState !== 4) {
      return;
    } else if (xhr.status !== 200) {
      throw `Error: ${xhr.status}`;
    }
    let output = JSON.parse(xhr.responseText);

    let content = "";

    output.results.forEach(item => {
      let itemName = item.name || item.title;
      content += `<div class="col-3 bg-primary"> ${itemName} </div>`;
    });

    movies.html(content);
  });
}

// code
searchForm.on("submit", getApi);
