// Your event handler should be defined here with an event parameter
// Call event.preventDefault() at the start of your function to prevent the default url change that may block the other code in your function.
// Use <id>.value to select the input id of your search bar that you defined in the HTML page.
// For example, if you gave the <input> tag the 'query' id, call query.value

// The fetch function takes a string url as an argument. This is the url the GET request will be sent to.
// The url is formatted w/ string interpolation - ie., adding variables to your string.
// In Javascript, you use string interpolation be using backticks to make strings instead of double-quotes.
// Then, you place the variable in between ${}.

// The two then() functions are evoked one by one once the GET request receives a response from the Youtube servers.
// The then() function takes a function as an argument. This function is evoked when then() is called.
// Below, you'll see two functions defined without names. They're called 'anonymous functions'.
// The response from the fetch request is passed into the anonymous functions as arguments.
//

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
