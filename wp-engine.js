
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        // IDEA: Add sizing option and put as parameter; ex select `4K` from dropdown and get UHD wallpapers
        var eightBit = properties.eightBit.value;
        var pixelDensity = properties.pixelDensity.value;

        if (eightBit) {
          setPixelation(pixelDensity);
          randomWallpaper();
        } else {
          setPixelation(100);
          randomWallpaper();
        }
    }
};

// IDEA: Have this value be passed to pixelation-setting function when changed
  // But how to monitor for change?
/*
var eightBit, pixelDensity;
function getPixelation() {
  alert("eightBit:" + eightBit + ", pixelDensity: " + pixelDensity);
  if (eightBit) {
    return pixelDensity;
  } else {
    return 100;
  }
}
*/