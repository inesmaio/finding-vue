<template>
  <div class="input-container">
    <h4>{{ title }}</h4>
    <p>{{ data }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "data"],
};
</script>
<style>
.input-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.input-container h4, p{
    margin: 10px;
}
</style>
