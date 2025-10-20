<template>
  <div>
    <AuthForm auth-type="sign-in" />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '~/components/page/auth/AuthForm.vue'

definePageMeta({
  layout: 'auth',
})
</script>

<style scoped>

</style>
