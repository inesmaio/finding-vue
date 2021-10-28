<template>
  <router-link :to="{ name: 'user', params: { userId: user.id } }" tag="button">
    <el-card class="box-card card">
      <template #header>
        <div class="card-header">
          <h3>{{ user.name }}</h3>
        </div>
      </template>
      <Input title="Name" :data="user.name" class="text item" />
      <Input title="City" :data="user.address.city" class="text item" />
      <Input title="Phone Number" :data="user.phone" class="text item" />
      <Input title="Company" :data="user.company.name" class="text item" />
    </el-card>
  </router-link>
</template>
<script>
import Input from "@/components/Input.vue";

export default {
  props: ["user"],
  components: {
    Input,
  },
};
</script>
<style>
.card {
  width: 94%;
}
.el-card {
  background-color: whitesmoke;
  color: #515D60;
  margin: 10px;
  text-align: left;
}
.el-card:hover {
  background-color: white;
}
.el-card h3 {
  text-align: center;
}
a:link {
  text-decoration: none;
}
</style>
