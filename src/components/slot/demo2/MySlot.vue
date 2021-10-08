<template>
  <div>
    <h4>具名插槽</h4>

    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot name="main"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
