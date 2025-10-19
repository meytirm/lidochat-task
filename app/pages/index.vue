<template>
  <div>
    hello world
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const config = useRuntimeConfig()
const fetchData = async () => {
  // const res = await $api.post(`accounts:signInWithCustomToken?key=`)
  const res = await $fetch('/api/firebase-login', {
    method: 'POST',
    body: {
      email: 'test@test.com',
      password: 'testtesttest',
      returnSecureToken: true,
    },
  })
  console.log(res)
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>
