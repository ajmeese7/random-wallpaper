document.getElementById("button").setAttribute("onclick", "javascript:randomWallpaper(100);");
// TODO: Find a way for this to get the proper pixelation value

// Had to change eightBit to pixel because otherwise it overrides the 8bit.js function
function randomWallpaper(pixelDensity) {
  var url = "https://source.unsplash.com/random/1920x1080";
  var img = new Image();

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    // This is now officially being called on button press, but wallpaper only updates
    // every once in a while seemingly at random after you click the button. API issue?
    document.getElementById("container").removeChild(document.getElementById("canvas"));
    document.getElementById("container").innerHTML += "<canvas id='canvas'></canvas>";

    eightBit(document.getElementById('canvas'), img, pixelDensity)
  };

  // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
  // IDEA: Save the link from image to WP Engine property after it has been displayed?
}