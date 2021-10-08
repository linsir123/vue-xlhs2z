<template>
  <div>
    <p>不过，字符串只是开始！插槽还可以包含任何模板代码，包括 HTML或其他组件</p>
    <slot>我是备用内容，当没有往插槽传入内容时就会看到我！！</slot>
  </div>
</template>

<script>
export default {};
</script>
