<template>
  <div>
    <h4>作用域插槽</h4>
    <ul>
      <li v-for="(user, i) in users">
        <slot :user="user" :i="i"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['a', 'b'],
    };
  },
};
</script>
