<template>
    <div id="wrapper-background" class="h-full bg-background-pink">    
        <div class="max-w-screen-sm mx-auto px-4 py-10 mt-8">

            <!-- FORMULARIO DE REGISTRO -->
            <form @submit.prevent="register" class="p-8 flex flex-col bg-light-green rounded-md shadow-lg">
                <h1 class="text-3 text-white mb-8">Register</h1>

                <div id="user wrapper" class="flex flex-col md:flex-row md:gap-5">
                    <div class=" container flex flex-col mb-6">
                        <label for="name" class="mb-1 text-md text-white font-medium">Name</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 text-gray-500 focus:outline-none rounded-md" 
                        id="name" 
                        v-model="name" 
                        />
                    </div>

                    <div class="container flex flex-col mb-4">
                        <label for="age" class="mb-1 text-md text-white font-medium">Age</label>
                        <input 
                        type="number" 
                        required 
                        class="p-2 text-gray-500 focus:outline-none rounded-md" 
                        id="age" 
                        v-model="age" 
                        />
                    </div>
                </div>

                <div id="email" class="flex flex-col mb-6">
                    <label for="email" class="mb-1 text-md text-white font-medium">Email</label>
                    <input 
                    type="email" 
                    required 
                    class="p-2 text-gray-500 focus:outline-none rounded-md" 
                    id="email" 
                    v-model="email" 
                    />
                </div>

                <div id="phone" class="flex flex-col mb-6">
                    <label for="phone" class="mb-1 text-md text-white font-medium">Phone</label>
                    <input 
                    type="number" 
                    required 
                    class="p-2 text-gray-500 focus:outline-none rounded-md" 
                    id="phone" 
                    v-model="phone" 
                    />
                </div>

                <div id="password wrapper" class="flex flex-col md:flex-row md:gap-5">
                    <div class=" container flex flex-col mb-6">
                        <label for="password" class="mb-1 text-md text-white font-medium">Password</label>
                        <input 
                        type="password" 
                        required 
                        class="p-2 text-gray-500 focus:outline-none rounded-md" 
                        id="password" 
                        v-model="password" 
                        />
                    </div>

                    <div class="container flex flex-col mb-4">
                        <label for="confirmPassword" class="mb-1 text-md text-white font-medium">Confirm Password</label>
                        <input 
                        type="password" 
                        required 
                        class="p-2 text-gray-500 focus:outline-none rounded-md" 
                        id="confirmPassword" 
                        v-model="confirmPassword" 
                        />
                    </div>
                </div>

                <!-- MENSAJE DE ERROR -->
                <div id="error-message" v-if="errorMsg" class="bg-red py-1 px-1 rounded-md text-center">
                    <p class="text-black font-semibold">{{errorMsg}}</p>
                </div>

                <!-- MENSAJE DE VERIFICACIÓN EMAIL -->
                <div id="success-message" v-if="verifyEmail" class="bg-success py-1 px-1 rounded-md text-center mb-3">
                    <p class="text-logo-font-color font-semibold">{{verifyEmail}}</p>
                </div>

                <!-- MENSAJE DE REDIRECT AL LOGIN -->
                <div id="redirect-message" v-if="redirect">
                    <p class="text-black text-center text-background-pink font-semibold">{{redirect}}</p>
                </div>

                <button 
                type="submit" 
                class="mt-6 py-3 px-8 rounded-md self-start text-md
                text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                hover:text-logo-font-color"
                >
                Register
                </button>

                <!-- LINK HACIA LOGIN -->
                <router-link 
                class="text-sm mt-2 text-center text-logo-font-color 
                font-bold self-start mx-auto" 
                :to="{name: 'Login'}"
                >
                Already have an account? <span class="text-skin-pink font-semibold">Login</span>
                </router-link>
                
            </form>
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

// DECLARACIÓN DE VARIABLES

const name = ref(null);
const age = ref(null);
const email = ref(null);
const phone = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null)
const verifyEmail = ref(null);
const redirect = ref(null);
const router = useRouter();
const userStore = useUserStore()

// FUNCIÓN DE REGISTRO (LLAMA AL STORE USER.JS)

const register = async function () {
    if (password.value === confirmPassword.value){
        try{
            await userStore.signUp(email.value, password.value, name.value, age.value, phone.value)

            // Mensaje de registro completado
            verifyEmail.value = "Sign up complete! Please, verify your email before login in your mailbox";
            redirect.value = "You will now be redirected to Login page"
            setTimeout(() => {
                router.push({name: 'Login'});
                verifyEmail.value = null;
                redirect.value = null;
            },7000)                     
        }
        // Mensaje de error al registrarse
        catch(error){            
            errorMsg.value = error.message;
        }
        return;
    }
    // Mensaje de error de validación de inputs
    errorMsg.value = "The passwords do not match!";
    setTimeout(() => {
        errorMsg.value = null
    }, 10000)    
}

</script>

<style>

</style>