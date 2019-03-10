
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        // IDEA: Add sizing option and put as parameter; ex select `4K` from dropdown and get UHD wallpapers
        // TODO: Add a way to generate a new wallpaper without switching...
        var eightBit = properties.eightBit.value;
        var pixelDensity = properties.pixelDensity.value;
        if (eightBit) {
          randomWallpaper(pixelDensity);
        } else {
          randomWallpaper(100);
        }
    }
};
