<template>
  <div class="min-h-full font-Poppins box-border h-screen bg-background-pink">
    <Navbar class="font-Silkscreen" />   
    <RouterView />
  </div>
</template>

<script setup>
// VUE
import { onMounted } from 'vue'

// COMPONENTS
import Navbar from './components/Navbar.vue'

// ROUTER
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

// PINIA
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/user.js'

// SUPABASE
import {supabase} from './supabase.js'

// VARIABLES
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

// onMounted(async () => {
//   try {
//     await userStore.fetchUser() // here we call fetch user
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       router.push({ path: '/auth' });
//     } else {
//       // continue to dashboard
//       router.push({ path: '/' });
//     }
//   } catch (e) {
//     console.log(e)
//   }
// })
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
</style>
