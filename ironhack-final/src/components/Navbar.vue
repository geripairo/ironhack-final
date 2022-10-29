<template>
    <header class="bg-header-purple text-logo-font-color">
        <nav class="container pt-5 px-4 gap-5 flex flex-col items-center">

            <!-- IMÁGEN LOGO -->
            <div class="flex items-center gap-x-4 flex-col md:flex-row">
                <img class="w-64 sm:w-64" src="../assets/images/logo-img.png" alt="woman-yoga-logo">
                <h1 class="text-5 text-center text-logo-font-color sm:text-6">Flexdev <br> <p class="text-xs sm:text-sm">{{claimer}}</p></h1>                
            </div>
            
            <!-- LINKS A LAS RUTAS -->
            <ul class="flex flex-1 gap-x-10 font-Poppins font-bold pb-6 text-xl md:pb-10 md:text-2">
                <router-link  v-if="!user" class="cursor-pointer" :to="{ name: 'Home'}">HOME</router-link>
                <router-link  v-if="user" @click="fetchData" class="cursor-pointer" :to="{ name: 'Dashboard'}">DASHBOARD</router-link>
                <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Create'}">CREATE</router-link>
                <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Login'}">LOGIN</router-link>
                <li v-if="user" @click="logout" class="cursor-pointer">LOGOUT</li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

// VUE
import {computed} from 'vue'

// SUPABASE
import {supabase} from '../supabase.js';

// ROUTER
import {useRouter} from 'vue-router';

// PINIA
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'
import {useTaskStore} from '../stores/task.js'

const userStore = useUserStore();
const router = useRouter();


// SUBTÍTULO DEL LOGO
const claimer = "<Train> Train your body () => Boost, Your, Code! </Train>"

const taskStore = useTaskStore();
// OBTENEMOS EL USUARIO DESDE EL STORE
const user = computed (() => userStore.user);

// LLAMAMOS LA FUNCIÓN LOGOUT DEL STORE USER.JS
const logout = async function () {
    await userStore.logOut();
    router.push({name: 'Home'});    
};

const fetchData = function () {
    taskStore.fetchTasks(userStore.user.id)
}

</script>

<style>

</style>