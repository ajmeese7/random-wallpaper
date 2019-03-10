// Had to change eightBit to pixel because otherwise it overrides the 8bit.js function
function randomWallpaper(pixelDensity) {
  var url = "https://source.unsplash.com/random/1920x1080";
  var img = new Image();

  img.src = url;
  img.width = "1920";
  img.height = "1080";

  img.onload = function() {
    eightBit(document.getElementById('canvas'), img, pixelDensity)
  };

  // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
  // TODO: Add an option some way to save displayed images! (or at least save the link)
}
