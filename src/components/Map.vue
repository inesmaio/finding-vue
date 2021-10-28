<template>
  <div ref="mapContainer" id="mapid" />
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";

const API_KEY =
  "sk.eyJ1IjoiaW1haW8iLCJhIjoiY2t1cGw5ZG1zMjg5YTMzbzZiOGo1b2FnNCJ9.-47pjEYJdSM5uqOYxPfPJw";

export default {
  props: ["locations"],
  setup(props) {
    let mymap;
    onMounted(() => {
      const { locations } = props;
      mymap = leaflet.map("mapid").setView([-50, 0], 2);

      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${API_KEY}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: { API_KEY },
          }
        )
        .addTo(mymap);
      for (var i = 0; i < locations.length; i++) {
        new leaflet.marker([locations[i][1], locations[i][2]])
          .bindPopup(locations[i][0])
          .addTo(mymap);
      }
    });
  },
};
</script>
<style>
#mapid {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
