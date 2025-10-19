<template>
  <div>
    hello world
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const config = useRuntimeConfig()
const fetchData = async () => {
  const res = await $api.post(`accounts:signInWithCustomToken?key=`)
  console.log(res)
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>
