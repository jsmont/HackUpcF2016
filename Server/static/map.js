const GOOGLE_API_KEY = "AIzaSyAQwGT6uVFpwLcyJ1kmJFJzx6rL5uUMmYY"

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.3947687, lng: 2.0785561},
    zoom: 12
  });
};