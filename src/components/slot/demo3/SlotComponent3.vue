<template>
  <div>
    <my-slot v-slot:default="slotProps">
      <span> {{ slotProps.i }} => {{ slotProps.user }} </span>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './MySlot.vue';

export default {
  name: 'SlotComponent3',
  components: {
    MySlot,
  },
};
</script>
