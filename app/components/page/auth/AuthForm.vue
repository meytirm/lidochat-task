<template>
  <div>
    <NuxtLink
      class="d-flex justify-content-center mb-4"
      to="/"
    >dashboard</NuxtLink>
    <BCard>
      <div class="d-flex justify-content-center">
        {{ props.authType === 'sign-in' ? 'Sign In' : 'Sign Up' }}
      </div>
      <hr class="mb-4">
      <BForm>
        <BFormFloatingLabel
          label="Email address"
          label-for="floatingEmail"
          class="my-2"
        >
          <BFormInput
            id="floatingEmail"
            v-model="authForm.email"
            type="email"
            placeholder="Email address"
          />
        </BFormFloatingLabel>
        <BFormFloatingLabel
          label="Password"
          label-for="floatingPassword"
          class="my-2"
        >
          <BFormInput
            id="floatingPassword"
            v-model="authForm.password"
            type="password"
            placeholder="Password"
          />
        </BFormFloatingLabel>
        <BFormFloatingLabel
          v-if="props.authType === 'sign-up'"
          label="Confirm Password"
          label-for="floatingConfirmPassword"
          class="my-2"
        >
          <BFormInput
            id="floatingConfirmPassword"
            v-model="authForm.confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </BFormFloatingLabel>
        <div class="fs-6 my-4">
          <NuxtLink
            v-if="authType === 'sign-up'"
            to="/sign-in"
          >
            Already have an account? Sign in
          </NuxtLink>
          <NuxtLink
            v-else
            to="/sign-up"
          >
            Don't have an account? Sign up
          </NuxtLink>
        </div>
        <BButton
          type="submit"
          variant="primary"
        >
          Submit
        </BButton>
      </BForm>
    </BCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  authType: 'sign-in' | 'sign-up'
}>()

const authForm = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})
</script>

<style scoped>

</style>
