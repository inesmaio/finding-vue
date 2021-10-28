<template>
  <el-container v-loading="loading">
    <el-container v-if="!loading && users.length && locations.length">
      <el-container>
        <el-header>
          <h1>Finding Vue</h1>
        </el-header>
        <el-container>
          <el-scrollbar>
            <el-aside>
              <Card v-for="(user, i) in users" :phone="phone" :user="user" :key="i" />
            </el-aside>
          </el-scrollbar>
          <el-container>
            <el-main>
              <Map :locations="locations" />
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Card from "@/components/Card.vue";
import Map from "@/components/Map.vue";
import store from "@/store/index.ts";

export default {
  name: "Home",
  components: {
    Card,
    Map,
  },
  computed: {
    users() {
      return store.state.users;
    },
    loading() {
      return store.state.loading;
    },
    locations() {
      return store.getters.locations;
    },
    phone() {
      console.log("TREMOÇO", store.getters.phoneNumber);
      return store.getters.phoneNumber;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e8f7f0;
  height: 100vh;
}
h1 {
  font-size: 35px;
}
.el-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #518b60;
  color: whitesmoke;
  text-align: center;
  line-height: 60px;
}
.el-main {
  margin: 0;
  padding: 0;
  height: auto;
}
.el-aside {
  background-color: #dfd553;
  color: var(--el-text-color-primary);
  height: 70vw;
  width: auto;
  overflow-y: scroll;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
