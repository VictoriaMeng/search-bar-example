// Your event handler should be defined here with an event parameter
// Call event.preventDefault() at the start of your function to prevent the default url change that may block the other code in your function.
// Use <id>.value to select the input id of your search bar that you defined in the HTML page.
// For example, if you gave the <input> tag the 'query' id, call query.value

function getResults(event) {
  event.preventDefault();
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query.value}&type=channel&key=AIzaSyDA7HqRQRDt7KAblpWYrm12u5sEpNoqBVE`)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    topResult = data.items[0].snippet;
    channelId.innerHTML = topResult.channelId;
    channelTitle.innerHTML = topResult.channelTitle;
    description.innerHTML = topResult.description;
    thumbnail.src = topResult.thumbnails.default.url;
  })
}
