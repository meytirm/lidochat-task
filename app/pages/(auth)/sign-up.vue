<template>
  <div>
    <AuthForm auth-type="sign-up" />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '~/components/page/auth/AuthForm.vue'

definePageMeta({
  layout: 'auth',
  requiresGuest: true,
})
</script>

<style scoped>

</style>
