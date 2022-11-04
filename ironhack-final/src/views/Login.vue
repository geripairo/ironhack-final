<template>
    <div class="h-screen w-full bg-almost-white">

        <div class="pt-12 md:pt-24 
        bg-almost-white">

                <!-- IMG -->
            <div id="img-wrapper" class="object-contain bg-almost-white mx-auto relative">
                <!-- FORMULARIO DE LOGIN -->
                <div id="form" class="max-w-screen-sm px-4 mt-8 
                    lg:absolute mx-auto w-full">
                    <form 
                        @submit.prevent="login" 
                        class="p-8 flex flex-col lg:bg-green-low lg:rounded-md lg:shadow-xl"
                    >
                        <h1 class="text-4 text-green-strong mb-8 font-Roboto lg:text-almost-white font-Silkscreen">Login</h1>
                
                        <div class="flex flex-col mb-6">
                            <label for="email" class="mb-1 text-md text-green-strong font-medium lg:text-almost-white font-Silkscreen">Email</label>
                            <input 
                            type="email" 
                            required 
                            class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:bg-almost-white opacity-70 lg:opacity-100 lg:text-green-strong" 
                            id="email" 
                            v-model="email" 
                            />
                        </div>            
                
                        <div class="flex flex-col mb-6">
                            <label for="password" class="mb-1 text-md text-black font-medium text-green-strong lg:text-almost-white font-Silkscreen">Password</label>
                            <input 
                            type="password" 
                            required 
                            class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:bg-almost-white opacity-70 lg:opacity-100 lg:text-green-strong" 
                            id="password" 
                            v-model="password" 
                            />
                        </div>  
                        
                        
                        <!-- MENSAJE DE ERROR -->
                        <div id="error-message" v-if="errorMsg" class="bg-red py-1 px-1 rounded-md text-center">
                            <p class="text-black font-semibold">{{errorMsg}}</p>
                        </div>

                        <button 
                        type="submit" 
                        class="font-Silkscreen bg-green-low text-almost-white rounded-lg py-4 
                        px-8 mt-7 font-semibold shadow-md lg:bg-green-strong duration-200 hover:bg-pink hover:text-green-strong"
                        >
                        Login
                        </button>
                
                        <!-- LINK HACIA REGISTER -->
                        <router-link class="text-sm mt-8 text-center text-green-low font-bold self-start mx-auto lg:text-green-strong" :to="{name: 'Register'}">
                            Don't have an account? <span class="text-green-strong font-semibold underline lg:text-almost-white duration-200 hover:text-pink">Register</span>
                        </router-link>          
                        
                    </form>
                </div>
                <img
                id="login-img" 
                src="../assets/images/login/man-laptop.png" 
                alt="man-running-with-laptop"
                class="hidden lg:block ml-52"
                >
            </div>
        </div>
    </div>    
  </template>

<script setup>

// VUE
import {ref} from 'vue';

// SUPABASE
import {supabase} from '../supabase.js';

// ROUTER
import {useRouter} from 'vue-router';

// PINIA
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'
  
  
//   DECLARACIÓN DE VARIABLES

  const email = ref(null);
  const password = ref(null);
  const errorMsg = ref(null);
  const router = useRouter();
  const userStore = useUserStore()

//   FUNCIÓN DE LOG IN DE USUARIO
  const login = async function () {
    try{
        await userStore.logIn(email.value, password.value);
        router.push({name: 'Dashboard'});

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
 #login-img{
    width: 60%;
 }

 #form{
    top:15%;
    left: 50%;
    width: 40%;
 }

 @media(max-width: 1023px){
    #form-wrapper{
        width: 100%;
    }
 }
</style>