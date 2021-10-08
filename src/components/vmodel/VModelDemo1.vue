<template>
  <div id="demo1">
    <p>hello, {{ fullName }}</p>
    <v-model-input
      v-model:first.capitalize="firstName"
      v-model:last="lastName"
    ></v-model-input>
  </div>
</template>

<script>
/**
 * 学习顺序
 * 1. https://v3.cn.vuejs.org/guide/forms.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model
 * 了解「v-model」的表单输入绑定用户
 *
 * 2.https://v3.cn.vuejs.org/guide/component-basics.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model
 * 了解「v-model」在组件上绑定实现的两种方式以及其基本原理
 *
 *3. https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0
 * 了解「v-model」在组件的"参数"以及"多个绑定"和"修饰符"的实现方式
 */

import VModelInput from './VModelInput.vue';

export default {
  name: 'VModelDemo1',

  // 注册组件
  components: {
    VModelInput,
  },

  // data property
  data() {
    return {
      firstName: 'John',
      lastName: 'cena',
    };
  },

  // 计算属性
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
