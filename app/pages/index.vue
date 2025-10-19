<template>
  <div>
    hello world
  </div>
</template>

<script setup lang="ts">
import { AuthService } from '~/service/auth'

const { $api } = useNuxtApp()
const authService = new AuthService($api)
const fetchData = async () => {
  const res = await authService.signIn()
  // const res = await $fetch('/api/firebase-login', {
  //   method: 'POST',
  //   body: {
  //     email: 'test@test.com',
  //     password: 'testtesttest',
  //     returnSecureToken: true,
  //   },
  // })
  console.log(res)
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>
