<template>
  <my-slot>
    <!-- 添加一个Font Awesome 图标 -->
    <i class="fas fa-plus">xxx</i>
    Add todo
  </my-slot>
</template>

<script>
import MySlot from './MySlot.vue';

export default {
  name: 'SlotComponent1',
  components: {
    MySlot,
  },
};
</script>
