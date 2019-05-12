// Makes the reset button change the wallpaper like it is supposed to. 
// For some reason event handlers wouldn't work, but this did ¯\_(ツ)_/¯
document.getElementById("button").setAttribute("onclick", "javascript:randomWallpaper();");

var pixelation = 100;
function setPixelation(pixelDensity) {
  pixelation = pixelDensity;
}

function randomWallpaper() {
  // The Math.random() is required to prevent the query from "helping" you.
  // See: https://github.com/unsplash/unsplash-source-js/issues/9
  var url = "https://source.unsplash.com/random/1920x1080?sig=" + Math.random();
  var img = new Image();

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    eightBit(document.getElementById('canvas'), img, pixelation);
  };

  // IDEA: Save the link from image to WP Engine property after it has been displayed?
}

