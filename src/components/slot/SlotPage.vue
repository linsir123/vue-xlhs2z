<template>
  <div>
    <button
      class="button"
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="currentTab" class="demo-tab"></component>
  </div>
</template>

<script>
import SlotComponent1 from './demo1/SlotComponent1.vue';
import SlotComponent2 from './demo2/SlotComponent2.vue';

export default {
  name: 'SlotPage',
  components: {
    SlotComponent1,
    SlotComponent2,
  },
  data() {
    return {
      currentTab: 'SlotComponent1',
      tabs: ['SlotComponent1', 'SlotComponent2'],
    };
  },
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
