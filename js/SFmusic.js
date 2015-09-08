$(document).ready(function() {
  console.log("inside");
  
  setSelectInput();
})


function ajaxRequest(method, url) {
  var request = new XMLHttpRequest();
  request.open(method, url)
  request.send();
  return request;
}

function successfulRequest(request) {
  return request.readyState === 4 && request.statusText === 'OK'
}

  // Defining variables
  var getSearchSelector = $('#search-type'); 
  var getSearchButton = $('#search-button');
  var getSearchInput = $('#search-input');
  var getResultData = $('#results');
  var selector;
  var input;
  
  // Event Listeners
  getSearchSelector.on('focus', getSelectInput);
  
  getSearchButton.on('click', getDatafromSpotify);
  getSearchInput.on('blur', getFormInput);


  // Functions

  function setSelectInput(e) {
    var types = ['artist', 'album', 'track'];
    console.log("inside getSearchTypeInput");
    getSearchSelector.empty();
    $.each(types, function(index, type) {
      console.log(type)
      getSearchSelector.append('<option value="' + type + '">' + type + '<option');
    });
    getSearchSelector.prepend('<option value="default">Choose your search<option');
  }



 // artist, track, album
  var limit = 10;
   
  
  function getDatafromSpotify() {
    var input = getFormInput();
    
    //var request = ajaxRequest('GET', 'https://api.spotify.com/v1/search?q=' + input //+ '&offset=0&limit=' + limit + '&type=' + selector + '')
    //url = 'https://api.spotify.com/v1/search?q=' + input + '&offset=0&limit=' + //limit + '&type=' + selector + '';
    //console.log(url);
    //if (successfulRequest(request)) {
    //    template = "";
    //    console.log("hello");
    //    var response = JSON.parse(request.response);
    //    // dataType add to search type selector: artist, track, album
    //    console.log(response);
    //    $.each(response.selector.items, function(index, data) 
    //    {
    //      console.log('inside response');
    //      console.log(data);
    //      template += "<p>- " + data.name + "</p>";
    //    });
    //      
    //    getResultData.append(template);
    //}

    getSelectInput();
    $.get('https://api.spotify.com/v1/search?q=' + input + '&offset=0&limit=' +limit + '&type=' + selector + '', function(response) {
        console.log('inside getData');
        url = 'https://api.spotify.com/v1/search?q=' + input + '&offset=0&limit=' + limit + '&type=' + selector + '';
        console.log(url);
        template = "";
        var selectors = "artists";
        var query = response.artists.items;
        //var query = response.selector.items;
        // dataType add to search type selector: artist, track, album
        var selectors = selector + 's';
        //var query = response.selectors.items[0];
        
        $.each(query, function(index, data) 
        {
          console.log('inside response');
          console.log(data);
          template += "<p>- " + data.name + "</p>";
        });
          
        getResultData.append(template);
    });
  
  };

  function getFormInput(){
    inputQuery = $('input#search-input');
    // getting the value itself
    userInput = inputQuery[0].value;
    console.log(userInput);
    // if we have an input
    if(userInput){ 
      return userInput;
    } 
  }
  function getSelectInput() {
    inputQuery = $('select#search-type');
    selector = inputQuery[0].value;
    return selector;
  }


















