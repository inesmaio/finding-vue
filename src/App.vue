<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index.ts";

export default defineComponent ({
  name: "App",
  created() {
    store.dispatch("fetchUsers");
  },
});
</script>

<style>
body {
  margin: 0;
  max-width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515D60;
  background-color: #e8f7f0;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
