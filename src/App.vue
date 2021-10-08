<template>
  <div id="app"></div>
  <v-model-page></v-model-page>
  <!--<slot-page></slot-page>-->
</template>

<script>
import VModelPage from './components/vmodel/VModelPage.vue';
import SlotPage from './components/slot/SlotPage.vue';

export default {
  name: 'App',
  components: {
    VModelPage,
    SlotPage,
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
