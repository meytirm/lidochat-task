<template>
  <div>
    <BNavbar
      v-b-color-mode="'dark'"
      toggleable="lg"
      variant="primary"
    >
      <BNavbarBrand href="#">
        Dashboard
      </BNavbarBrand>
      <BNavbarToggle target="nav-collapse" />
      <BCollapse
        id="nav-collapse"
        is-nav
      >
        <!-- Right aligned nav items -->
        <BNavbarNav class="ms-auto mb-2 mb-lg-0">
          <BNavItemDropdown
            v-if="userData"
            right
          >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ userData.email }}</em>
            </template>
            <BDropdownItem
              href="#"
              @click="signOut"
            >
              Sign Out
            </BDropdownItem>
          </BNavItemDropdown>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import type { FirebaseUserResponse } from '~~/types/firebase'

const store = useStore()
const userData = computed<FirebaseUserResponse>(() => store.state.user)

async function signOut() {
  try {
    await store.dispatch('signOut')
    localStorage.removeItem('userInformation')
    await navigateTo('/sign-in')
  }
  catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  const userInformationStorage = localStorage.getItem('userInformation')
  console.log(userInformationStorage)
  if (userInformationStorage) {
    const userInformation = JSON.parse(userInformationStorage)
    store.commit('setUser', userInformation)
  }
  else {
    const accessToken = useCookie('accessToken').value
    const userData = await store.dispatch('getUserData', accessToken)
    if (userData) {
      localStorage.setItem('userInformation', JSON.stringify(userData))
    }
  }
})
</script>

<style scoped>

</style>
