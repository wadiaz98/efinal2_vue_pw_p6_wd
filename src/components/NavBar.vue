<template>
  <div class="container">
    <router-link to="/insertar">Insertar</router-link>
    <router-link to="/consultar">Consultar</router-link>
  </div>
</template>

<script>
import router from "../router/router.js";
export default {
  components: {
    router,
  },
};
</script>

<style scoped>
.container {
  background: purple;
  padding: 1%;
}
a{
  color: rgb(165, 0, 165);
  text-decoration: none;
  margin: 0% 2%;
  background: white;
  padding: 0.5% 1%;
  border-radius: 15px;
}
a:focus{
  background: black;
}
</style>