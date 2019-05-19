
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        var eightBit = properties.eightBit.value;
        var pixelDensity = properties.pixelDensity.value;
        var resolution = properties.resolution.value;

        if (resolution) {
          setResolution(resolution);
        }
        
        if (eightBit) {
          setPixelation(pixelDensity);
        } else {
          setPixelation(100);
        }

        // Still need to find a way to update properties when clicking refresh button
        randomWallpaper();
    }
};