
/* ################################################
            Wallpaper Engine Interaction
   ################################################ */
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.random) {
            // IDEA: Add sizing option and put as parameter; ex select `4K` from dropdown and get UHD wallpapers
            var random = properties.random.value;
            if (random) {
              randomWallpaper();
            }

            // NOTE: The intended purpose of this is for a new image to be generated if the user checks
            //       then unchecks the box, but currently that isn't how it's working. The workaround I am
            //       using until this is fixed is switching wallpapers then coming back
        }
    }
};
