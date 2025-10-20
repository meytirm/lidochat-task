<template>
  <div class="vertical-center">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
