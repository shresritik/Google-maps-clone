navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
function successLocation(position) {
  setupmap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupmap([-2.54, 53.48]);
}
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hvcHBybyIsImEiOiJja3djM2hnenphNHFyMndudTR3NDgxandtIn0.OhEBPjGlHlNDTy8ggabWnw";
function setupmap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position [lng, lat]
    zoom: 14, // starting zoom
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
