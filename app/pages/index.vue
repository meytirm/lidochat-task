<template>
  <BContainer class="d-flex justify-content-center align-content-center mt-5">
    <b-card
      class="mb-4"
      bg-variant="light"
      header="Welcome!"
      header-bg-variant="primary"
      header-text-variant="white"
      align="center"
    >
      <b-card-body>
        <b-card-title>Hello, {{ userName }} 👋</b-card-title>
        <b-card-text>
          Welcome to your dashboard. Here’s a quick overview to get you started:
        </b-card-text>
      </b-card-body>
    </b-card>
  </BContainer>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

definePageMeta({
  isProtected: true,
})

const store = useStore()
const userName = computed(() => store.state.user.email)
</script>

<style scoped>

</style>
