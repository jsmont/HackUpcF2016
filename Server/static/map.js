const GOOGLE_API_KEY = "AIzaSyAQwGT6uVFpwLcyJ1kmJFJzx6rL5uUMmYY"

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
};