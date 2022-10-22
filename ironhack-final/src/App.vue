<template>
  <div class="min-h-full font-Poppins box-border h-screen bg-background-pink">
    <Navbar class="font-Silkscreen" />   
    <RouterView />
  </div>
</template>

<script setup>
// VUE
import { onMounted } from 'vue'
import {ref} from 'vue'

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
const { user } = storeToRefs()

// onMounted(async () => {
//   try {
//     // LLAMAMOS AL USUARIO
//     await userStore.fetchUser();
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       router.push({ name: 'Login' });
//     } else {
//       // continue to dashboard
//       router.push({ name: 'Dashboard' });
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })


// ESTABLECEMOS EL VALOR DE USUARIO AL CAMBIAR DE ESTADO
supabase.auth.onAuthStateChange((_, session) => {
  console.log(session)
    userStore.setUser(session);
})


</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
</style>
