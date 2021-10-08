<template>
  <div id="app"></div>
  <v-model-demo1></v-model-demo1>
</template>

<script>
import VModelDemo1 from './components/vmodel/VModelDemo1.vue';

export default {
  name: 'App',
  components: {
    VModelDemo1,
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
  margin-top: 60px;
}
</style>
