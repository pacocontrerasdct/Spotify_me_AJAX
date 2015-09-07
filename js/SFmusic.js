$(document).ready(function() {
  console.log("inside");

  // Defining variables
  var getSearchSelector = $('#search-type');
  var getSearchButton = $('#search-button');
  var getResultData = $('#results');

  // Event Listeners
  getSearchSelector.on('focus', getSearchTypeInput);
  //getSearchButton.on('click', getSearchTypeButton);
  getSearchButton.on('click', getDatafromSpotify);

  // Functions

  function getSearchTypeInput(e) {
    var types = ['artist', 'album', 'song'];
    console.log("inside getSearchTypeInput");
    getSearchSelector.empty();
    $.each(types, function(index, type) {
      console.log(type)
      getSearchSelector.append('<option value="' + type + '">' + type + '<option');
    });
    getSearchSelector.prepend('<option value="default">Choose your search<option');
  }

  function getSearchTypeButton(e) {
    console.log("inside getSearchTypeButton");

  }
  

  var artistName = 'madonna';
  var dataType = 'album'; // artist, track, album
  var limit = 5;
  
  function getDatafromSpotify() {
    $.get('https://api.spotify.com/v1/search?q=' + artistName + '&offset=0&limit=' + limit + '&type=' + dataType + '', 
      function(response) {
        console.log('inside getData');
        console.log(response.albums.items[0].name);
        
        template = "";


        //$.each(response.artists.items, function(index, data) 
        //{
        //  console.log('inside response');
        //  console.log(data);
        //  template += "<p>" + data.name + "</p>";
        //});

        //$.each(response.tracks.items, function(index, data) 
        //{
        //  console.log('inside response');
        //  console.log(data);
        //  template += "<p>" + data.name + "</p>";
        //});

        $.each(response.albums.items, function(index, data) 
        {
          console.log('inside response');
          console.log(data);
          template += "<p>" + data.name + "</p>";
        });
          
        getResultData.append(template);



      });
  
  };











})










