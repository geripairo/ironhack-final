<template>
    <!-- background img = bg-[url('./src/assets/images/skipping.png')] -->
    <div class="h-screen bg-background-pink bg-no-repeat mt-8">
    
        <div class="max-w-screen-sm mx-auto px-4 py-10">
    
        <!-- Login de usuario -->
        <form @submit.prevent="login" class="p-8 flex flex-col bg-light-green rounded-md shadow-lg">
            <h1 class="text-3 text-white mb-8">Login</h1>
    
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
                type="password" 
                required 
                class="p-2 text-gray-500 focus:outline-none rounded-md" 
                id="password" 
                v-model="password" 
                />
            </div>  
            
            <!-- Mensaje de error -->
            <div id="error-message" v-if="errorMsg" class="bg-red py-1 px-1 rounded-md text-center">
                <p class="text-black font-semibold">{{errorMsg}}</p>
            </div>

            <button 
            type="submit" 
            class="mt-6 py-3 px-8 rounded-md self-start text-md
            text-white bg-logo-font-color duration-200 hover:bg-background-pink 
            hover:text-logo-font-color"
            >
            Login
            </button>
    
            <router-link class="text-sm mt-2 text-center text-logo-font-color font-bold self-start mx-auto" :to="{name: 'Register'}">
                Don't have an account? <span class="text-skin-pink font-semibold">Register</span>
            </router-link>          
            
        </form>
        
        </div>
    </div>

    
  </template>
  
  <script setup>
  import {ref} from 'vue';
  import {supabase} from '../supabase.js';
  import {useRouter} from 'vue-router';
  
  
//   DECLARACIÓN DE VARIABLES

  const email = ref(null);
  const password = ref(null);
  const errorMsg = ref(null);
  const router = useRouter();

//   FUNCIÓN DE LOG IN DE USUARIO

  const login = async function () {
    try{
        let { user, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });
        if (error) throw error;
        router.push({name: 'Home'})

    }
    catch(error){
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
            errorMsg.value = null;
        }, 5000)
        
    }
  }
  </script>
  
  <style>
  
  </style>