<template>
  <my-slot>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:main>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </my-slot>
</template>

<script>
import MySlot from './MySlot.vue';

export default {
  name: 'SlotComponent2',
  components: {
    MySlot,
  },
};
</script>
