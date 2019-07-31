// Your event handler should be defined here with an event parameter
// Call event.preventDefault() at the start of your function to prevent the default url change that may block the other code in your function.
// Use <id>.value to select the input id of your search bar that you defined in the HTML page.
// For example, if you gave the <input> tag the 'query' id, call query.value


function getResults(event) {
  event.preventDefault();
  alert(query.value);
}
