function randomWallpaper() {
  var url = "https://source.unsplash.com/random/1920x1080";
  var image = document.getElementById("image");
  image.src = url; // TODO: Save URL to text file after image is gotten; replace if user keeps `random` option on
}
