// So the value from randomWallpaper() is saved for if the user hits the refresh button.
// NOTE: There MUST be a better way of doing this in case the user changes the value then refreshes.
var pixelation = 100;

// Refreshes the wallpaper on button click (in theory)
document.getElementById("button").addEventListener("click", function() {
  randomWallpaper(pixelation);
});

// TODO: Automated refreshing every x amount of time.
function randomWallpaper(pixelDensity) {
  // IDEA: Delete canvas then make a new one?
  var Http = new XMLHttpRequest();
  
  // Scrapes the HTML of the Unsplash page using one of my other (slow, in-need-of-update) projects
  var url = "https://dynamic-page-retrieval.herokuapp.com/scrape?URL=https://source.unsplash.com/random/1920x1080";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    response = Http.responseText;
    response = JSON.parse(response);

    // Gets the src of the randomly chosen image
    url = response.html.substring(response.html.search("src=") + 5).split("\"")[0];

    // Displays image at specified pixelation level
    var img = new Image();
    pixelation = pixelDensity;
    img.src = url;
    img.width = "1920";
    img.height = "1080";

    img.onload = function() {
      eightBit(document.getElementById('canvas'), img, pixelDensity)
    };
  }
}

/*
var pixelation = 100; // So the value from randomWallpaper() is saved for if the user hits the refresh button

document.getElementById("button").addEventListener("click", function() {
  //window.location.reload(); Works in JSFiddle, but not here :/
  const Http = new XMLHttpRequest();
  const url = "https://dynamic-page-retrieval.herokuapp.com/scrape?URL=https://source.unsplash.com/random/1920x1080";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    response = Http.responseText;
    response = JSON.parse(response);

    randomWallpaper(pixelation, response.html.substring(response.html.search("src=") + 5).split("\"")[0]);

    /*var img = new Image();
    img.width = "1920";
    img.height = "1080";
    img.src = response.html.substring(response.html.search("src=") + 5).split("\"")[0];
    img.onload = function() {
      eightBit(document.getElementById('canvas'), img, pixelation)
    };
  }
});

// Had to change eightBit to pixel because otherwise it overrides the 8bit.js function
function randomWallpaper(pixelDensity, url) {
  //var url = "https://source.unsplash.com/random/1920x1080";
  var img = new Image();
  pixelation = pixelDensity;

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    eightBit(document.getElementById('canvas'), img, pixelDensity)
  };

  // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
  // TODO: Add an option some way to save displayed images! (or at least save the link)
}
*/