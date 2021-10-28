<template>
  <el-container v-loading="loading">
    <el-container v-if="!loading && user">
      <el-header>
        <h1>{{ user.name }}</h1>
      </el-header>
      <el-container>
        <el-scrollbar>
          <el-aside class="map-container">
            <Map :locations="location"/>
          </el-aside>
        </el-scrollbar>
        <el-container class="data-container">
          <el-main>
            <el-container class="first-level-container">
              <div class="data-box">
                <div class="data-header">
                  <h3>Personal Data</h3>
                </div>
                <Input title="Name" :data="user.name" />
                <Input title="Username" :data="user.username" />
                <Input title="Email" :data="user.email" />
                <Input title="Website" :data="user.website" />
                <Input title="Phone" :data="user.phone" />
              </div>
              <div class="data-box">
                <div class="data-header">
                  <h3>Location</h3>
                </div>
                <Input title="City" :data="user.address.city" />
                <Input title="Street" :data="user.address.street" />
                <Input title="Zip" :data="user.address.zipcode" />
                <Input title="Lat" :data="user.address.geo.lat" />
                <Input title="Lng" :data="user.address.geo.lng" />
              </div>
              <div class="data-box">
                <div class="data-header">
                  <h3>Professional Data</h3>
                </div>
                <Input title="Company" :data="user.company.name" />
                <Input title="Catch Phrase" :data="user.company.catchPhrase" />
                <Input title="BS" :data="user.company.bs" />
              </div>
            </el-container>
            <router-link to="/" tag="button">
              <Button lable="Home" type="success" />
            </router-link>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Map from "@/components/Map.vue";
import store from "@/store/index.ts";

export default {
  name: "User",
  created() {
    store.dispatch("fetchUser", parseInt(this.$route.params.userId) );
  },
  components: {
    Button,
    Input,
    Map,
  },
  computed: {
    user() {
      return store.state.user;
    },
    loading() {
      return store.state.loading
    },
    location() {
      return store.getters.location
    }
  },
};
</script>

<style>
.data-container {
  display: flex;
  flex-direction: column;
}
.map-container {
  width: 50vw;
}
.box-card {
  max-width: 400px;
  max-height: 350px;
}
.data-header {
  border-bottom: 1px solid #515D60;
}
.first-level-container {
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
}
.data-box {
  max-width: 400px;
  max-height: 350px;
  padding: 20px;
}
</style>
