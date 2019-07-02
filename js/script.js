// variables
const searchForm = $("[data-target=search-form]");
const searchInput = $("[data-target=search-input]");
// functions
function getApi(e) {
  e.preventDefault();
  let searchText = searchInput.val();
  let url = `https://api.themoviedb.org/3/search/multi?api_key=547af96e462fbc7597135bd797803004&language=en-US&query=${searchText}`;
}

function requestApi(url) {}

// code
searchForm.on("submit", getApi);
