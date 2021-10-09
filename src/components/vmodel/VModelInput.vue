<template>
  <p>
    <!--
    组件实现v-model的方式二：
    在该组件中实现 v-model 的另一种方法是使用 computed property 的功能来定义 getter 和 setter。get 方法应返回 modelValue property，set 方法应该触发相应的事件。
    -->
    first name: <input v-model="firstName" />
  </p>

  <p>
    <!--
      组件实现v-model的方式一：

      <input v-model="searchText" />
      等价于：
      <input :value="searchText" @input="searchText = $event.target.value" />
      当用在组件上时，v-model 则会这样：

      <custom-input
        :model-value="searchText"
        @update:model-value="searchText = $event"
      ></custom-input>


      计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
      现在再运行 vm.searchText = 'John Doe' 时，setter 会被调用
    -->
    last name:
    <input :value="last" @input="$emit('update:last', $event.target.value)" />
  </p>
</template>

<script>
export default {
  name: 'VModelInput',
  props: ['first', 'last', 'firstModifiers'],
  emits: ['update:first', 'update:last'],
  computed: {
    // 通过计算属性实现绑定
    firstName: {
      get() {
        return this.first;
      },
      set(value) {
        // v-model修饰符，通过在props中添加"xxx"+"Modifiers"，并在input事件进行判断
        if (this.firstModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        this.$emit('update:first', value);
      },
    },
  },
};
</script>
