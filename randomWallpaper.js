function randomWallpaper() {
  var canvas = document.getElementById("canvas").getContext("2d");
  var button = document.getElementById("button");

  var image = new Image();
  image.crossOrigin = "anonymous";  // This enables CORS
  image.onload = function (event) {
      try {
          canvas.drawImage(image, 0, 0);
          button.download = "test.png";
          button.href = canvas.canvas.toDataURL();
      } catch (e) {
          alert(e);
      }
  };
  image.src = "https://source.unsplash.com/random/1920x1080";
}
