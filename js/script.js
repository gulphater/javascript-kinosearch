// variables
const searchForm = $("[data-target=search-form]");
const searchInput = $("[data-target=search-input]");
// functions
function getApi(e) {
  e.preventDefault();
  let searchText = searchInput.val();
  let url = `https://api.themoviedb.org/3/search/multi?api_key=547af96e462fbc7597135bd797803004&language=en-US&query=${searchText}`;
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

    console.log(JSON.parse(xhr.responseText));
  });
}

// code
searchForm.on("submit", getApi);
