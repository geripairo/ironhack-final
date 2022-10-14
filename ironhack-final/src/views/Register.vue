<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Mensaje de error -->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
        <p class="text-red-500">{{errorMsg}}</p>
    </div>

    <!-- Registro de usuario -->
    <form class="p-8 flex flex-col bg-light-green rounded-md shadow-lg">
        <h1 class="text-3 text-white mb-8">Register</h1>

        <div class="flex flex-col mb-6">
            <label for="email" class="mb-1 text-md text-white font-medium">Email</label>
            <input 
            type="email" 
            required 
            class="p-2 text-gray-500 focus:outline-none rounded-md" 
            id="email" 
            v-model="email" 
            />
        </div>

        <div class="flex flex-col mb-6">
            <label for="password" class="mb-1 text-md text-white font-medium">Password</label>
            <input 
            type="email" 
            required 
            class="p-2 text-gray-500 focus:outline-none rounded-md" 
            id="password" 
            v-model="password" 
            />
        </div>

        <div class="flex flex-col mb-4">
            <label for="confirmPassword" class="mb-1 text-md text-white font-medium">Confirm Password</label>
            <input 
            type="password" 
            required 
            class="p-2 text-gray-500 focus:outline-none rounded-md" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            />
        </div>

        <button 
        type="submit" 
        class="mt-6 py-3 px-8 rounded-md self-start text-md
        text-white bg-logo-font-color duration-200 hover:bg-background-pink 
        hover:text-logo-font-color"
        >
        Register
        </button>

        <router-link class="text-sm mt-2 text-center text-logo-font-color font-bold" :to="{name: 'Login'}">
            Already have an account? <span class="text-skin-pink font-semibold">Login</span>
        </router-link>
        
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
</script>

<style>

</style>