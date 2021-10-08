<template>
  <div>
    <button
      class="button"
      v-for="(tab, i) in tabs"
      :key="i"
      :class="['tab-button', { active: currentTab === i }]"
      @click="currentTab = i"
    >
      {{ tab.title }}
    </button>
    <component v-bind:is="currentTabName" class="demo-tab"></component>
  </div>
</template>

<script>
import SlotComponent1 from './demo1/SlotComponent1.vue';
import SlotComponent2 from './demo2/SlotComponent2.vue';
import SlotComponent3 from './demo3/SlotComponent3.vue';

export default {
  name: 'SlotPage',

  // 组件注册
  components: {
    SlotComponent1,
    SlotComponent2,
    SlotComponent3,
  },

  // data property
  data() {
    return {
      currentTab: 0,
      tabs: [
        { title: '插槽内容', name: 'SlotComponent1' },
        { title: '具名插槽', name: 'SlotComponent2' },
        { title: '作用域插槽', name: 'SlotComponent3' },
      ],
    };
  },

  // 计算属性
  computed: {
    currentTabName() {
      return this.tabs[this.currentTab].name;
    },
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
