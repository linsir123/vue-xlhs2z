<template>
  <div id="app" class="demo">
    <!--<v-model-page></v-model-page>-->
    <slot-page></slot-page>
  </div>
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

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
