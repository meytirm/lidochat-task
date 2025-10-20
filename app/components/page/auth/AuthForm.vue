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
      <BForm
        novalidate
        @submit.prevent="submitForm"
      >
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
            :state="v$.email.$errors.length > 0 ? false : null"
          />
          <BFormInvalidFeedback
            :state="false"
          >
            {{ v$.email.$errors[0]?.$message }}
          </BFormInvalidFeedback>
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
            :state="v$.password.$errors.length > 0 ? false : null"
          />
          <BFormInvalidFeedback
            :state="false"
          >
            {{ v$.password.$errors[0]?.$message }}
          </BFormInvalidFeedback>
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
            :state="v$.confirmPassword.$errors.length > 0 ? false : null"
          />
          <BFormInvalidFeedback
            :state="false"
          >
            {{ v$.confirmPassword.$errors[0]?.$message }}
          </BFormInvalidFeedback>
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
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps<{
  authType: 'sign-in' | 'sign-up'
}>()

const loading = ref(false)

const authForm = reactive({
  email: 'test@test.com',
  password: 'testtesttest',
  confirmPassword: '',
})

const rules = () => {
  const baseRules = {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  }

  if (props.authType === 'sign-in') {
    return baseRules
  }
  return { ...baseRules, confirmPassword: { required, sameAs: sameAs(authForm.password) } }
}

const rulesComputed = computed(() => rules())

const v$ = useVuelidate(rulesComputed, authForm, { $autoDirty: true })

async function submitForm() {
  const isFormCorrect = await v$.value.$validate()

  if (isFormCorrect) {
    loading.value = true
    if (props.authType === 'sign-in') {
      try {
        await store.dispatch('signIn', {
          email: authForm.email,
          password: authForm.password,
          returnSecureToken: true,
        })
      }
      catch (e) {
        console.log(e)
      }
      finally {
        loading.value = false
      }
    }
    else {
      try {
        await store.dispatch('signUp', {
          email: authForm.email,
          password: authForm.password,
        })
      }
      catch (e) {
        console.log(e)
      }
      finally {
        loading.value = false
      }
    }
  }
}
</script>

<style scoped>

</style>
