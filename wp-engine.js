
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        // IDEA: Add sizing option and put as parameter; ex select `4K` from dropdown and get UHD wallpapers
        // TODO: Add a way to generate a new wallpaper without switching...
        var eightBit = properties.eightBit.value;
        var pixelDensity = properties.pixelDensity.value;
        // IDEA: Have this value be passed to pixelation-setting function when changed
          // But how to monitor for change?

        if (pixelDensity) {
          setPixelation(pixelDensity);
        }

        if (eightBit) {
          setPixelation(pixelDensity);
          randomWallpaper();
        } else {
          setPixelation(100);
          randomWallpaper();
        }

        /*if (hasBeenRun()) {
          if (eightBit) {
            setPixelation(pixelDensity);
            changeWallpaper();
          } else {
            setPixelation(100);
            changeWallpaper();
          }
        } else {
          firstRun();
        }*/
    }
};
