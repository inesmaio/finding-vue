<template>
  <el-button :type="type">{{ lable }}</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    lable: String,
    type: String,
  },
});
</script>

<style>
.el-button{
  background-color: #518b60;
  color: whitesmoke;
}
</style>
