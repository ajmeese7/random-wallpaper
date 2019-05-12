// Makes the reset button change the wallpaper like it is supposed to. 
// For some reason event handlers wouldn't work, but this did ¯\_(ツ)_/¯
/*
document.getElementById("button").setAttribute("onclick", "javascript:changeWallpaper();");
*/
document.getElementById("button").setAttribute("onclick", "javascript:randomWallpaper();");

/*
var startTime;
function startTimer() {
  startTime = new Date();
};

function timeElapsed() {
  var endTime = new Date();
  var timeDiff = endTime - startTime;
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  return seconds;
}
*/

function randomWallpaper() {
  var url = "https://source.unsplash.com/random/1920x1080?sig=" + Math.random();
  var img = new Image();

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    // This is now officially being called on button press, but wallpaper only updates
    // every once in a while seemingly at random after you click the button. API issue?
    //document.getElementById("container").removeChild(document.getElementById("canvas"));
    //document.getElementById("container").innerHTML += "<canvas id='canvas'></canvas>";

    eightBit(document.getElementById('canvas'), img, pixelation);
  };

  // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
  // IDEA: Save the link from image to WP Engine property after it has been displayed?
}


// IDEA: Have the old function from other JSFiddle that runs between 1-minute cooldowns
// then have the randomWallpaper function called when the cooldown is over?
/*
function changeWallpaper() {
  alert("changeWallpaper()");
  if (timeElapsed() > 60) {
    alert("TOP of loop!");
    easyRandomWallpaper();
    startTimer();
  } else {
    alert("BOTTOM of loop!");
    complexRandomWallpaper();
  }
}
*/

var pixelation = 100;
function setPixelation(pixelDensity) {
  pixelation = pixelDensity;
}

/*
var hasBeenRun = false;
function firstRun() {
  alert("firstRun()!");
  easyRandomWallpaper();
  startTimer();
  hasBeenRun = true;
}

function hasBeenRun() {
  return hasBeenRun;
}
*/

/*
// Had to change eightBit to pixel because otherwise it overrides the 8bit.js function
function easyRandomWallpaper() {
  var url = "https://source.unsplash.com/random/1920x1080";
  var img = new Image();

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    // This is now officially being called on button press, but wallpaper only updates
    // every once in a while seemingly at random after you click the button. API issue?
    //document.getElementById("container").removeChild(document.getElementById("canvas"));
    //document.getElementById("container").innerHTML += "<canvas id='canvas'></canvas>";

    eightBit(document.getElementById('canvas'), img, pixelation);
  };

  // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
  // IDEA: Save the link from image to WP Engine property after it has been displayed?
}

// NOTE: Almost always the wrong size. Why??
function complexRandomWallpaper() {
  // NOTE: If I want to save the image links (no download fix is made), I will have to only use this
  // method and get rid of the faster one
  const Http = new XMLHttpRequest();
  var url = "https://dynamic-page-retrieval.herokuapp.com/scrape?URL=https://source.unsplash.com/random/1920x1080";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    response = Http.responseText;
    response = JSON.parse(response);
    url = response.html.substring(response.html.search("src=") + 5).split("\"")[0];

    var img = new Image();
    img.src = url;
    img.width = "1920";
    img.height = "1080";

    img.onload = function() {
      eightBit(document.getElementById('canvas'), img, pixelation)
    };
  }
}
*/