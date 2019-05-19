// Makes the reset button change the wallpaper like it is supposed to. 
// For some reason event handlers wouldn't work, but this did ¯\_(ツ)_/¯
document.getElementById("button").setAttribute("onclick", "javascript:randomWallpaper();");

var pixelation = 100;
function setPixelation(pixelDensity) {
  pixelation = pixelDensity;
}

var resolution = "1920x1080";
function setResolution(res) {
  resolution = res;
}

function randomWallpaper() {
  // The Math.random() is required to prevent the query from "helping" you.
  // See: https://github.com/unsplash/unsplash-source-js/issues/9
  var url = "https://source.unsplash.com/random/" + resolution + "?sig=" + Math.random();
  var img = new Image();

  img.src = url;
  img.width = screen.width;
  img.height = screen.height;

  img.onload = function() {
    eightBit(document.getElementById('canvas'), img, pixelation);
  };
}

