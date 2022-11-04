<template>
  <div class="font-Roboto box-border h-full bg-almost-white">
    <Navbar class="fixed top-0 w-screen"/>   
    <RouterView />
  </div>
</template>

<script setup>
// VUE
import { onMounted} from 'vue'
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


// ESTABLECEMOS EL VALOR DE USUARIO AL CAMBIAR DE ESTADO
supabase.auth.onAuthStateChange((_, session) => {
  console.log(session)
    userStore.setUser(session);
    if(session) {
      router.push({ name: 'Dashboard' });
    } else {
      router.push({ name: 'Home' });
    }
})


</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
</style>
