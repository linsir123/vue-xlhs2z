<template>
  <slot-component1></slot-component1>
</template>

<script>
import SlotComponent1 from './SlotComponent1.vue';

export default {
  name: 'SlotPage',
  components: {
    SlotComponent1,
  },
};
</script>
