<template>
    <header id="header" class="">
        <nav class="px-4 pt-3 flex flex-row justify-between items-center bg-almost-white lg:px-8">

            <!-- IMÁGEN LOGO -->
            <div class="mr-6">
                <router-link class="cursor-pointer" :to="{ name: 'Home'}"><img id="logo" src="../assets/images/logo-black.png" alt="woman-yoga-logo"></router-link>
            </div>
            
            <!-- LINKS A LAS RUTAS -->
            <ul v-if="!user" class="flex gap-x-3 font-Roboto font-bold text-almost-white 
                 text-xl"
            >
                <button class="text-black rounded-md border-2 border-green-strong px-3 shadow-md"><router-link class="cursor-pointer text-sm font-semibold font-Silkscreen" :to="{ name: 'Login'}">Login</router-link></button>
                <button class="bg-green-low text-almost-white rounded-md px-3 shadow-md"><router-link class="cursor-pointer text-sm font-semibold font-Silkscreen" :to="{ name: 'Register'}">Sign Up</router-link></button>
            </ul>
            <ul v-else class="flex gap-x-3 lg:gap-x-8 font-Roboto font-bold text-green-strong 
                 text-lg md:text-xl"
            >
                <router-link  @click="fetchData" class="cursor-pointer border-b-4 border-green-strong" :to="{ name: 'Dashboard'}">Dashboard</router-link>
                <router-link class="cursor-pointer border-b-4 border-green-strong" :to="{ name: 'Create'}">Create</router-link>
                <button @click="logout" class="text-green-strong rounded-md border-2 border-green-strong px-3 shadow-md">Logout</button>

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
#logo{
    width: 150px;
}
#logo-mobile{
    width: 60px;
}
</style>