<template>
    <div id="wrapper-background" class="h-screen w-full bg-almost-white pt-12 md:pt-24 
    lg:flex lg:items-center">

        <!-- IMG -->
        <div id="img-wrapper" class="lg:w-1/2">
            <img src="../assets/images/register/pino-puente.png" alt="woman-bridge"
            class="hidden w-full lg:block md:ml-3 md:ml-6 lg: xl:ml-34 2xl:ml-48"
        >
        </div>    
        <div id="fomr-wrapper" class="max-w-screen-sm mx-auto px-4 mt-8 lg:mr-48 lg:w-full">

            <!-- FORMULARIO DE REGISTRO -->
            <form @submit.prevent="register" class="p-8 flex flex-col  
             lg:bg-green-low lg:rounded-md lg:shadow-lg">
                <h1 class="text-4 text-green-strong mb-8 lg:text-almost-white font-Silkscreen">Register</h1>

                <div id="user wrapper" class="flex flex-col md:flex-row md:gap-5">
                    <div class=" container flex flex-col mb-6">
                        <label for="name" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Name</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white 
                        lg:bg-almost-white opacity-70 lg:opacity-100 lg:text-green-strong" 
                        id="name" 
                        v-model="name" 
                        />
                    </div>

                    <div class="container flex flex-col mb-4">
                        <label for="age" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Age</label>
                        <input 
                        type="number" 
                        required 
                        class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:text-green-strong lg:bg-almost-white opacity-70 lg:opacity-100" 
                        id="age" 
                        v-model="age" 
                        />
                    </div>
                </div>

                <div id="email" class="flex flex-col mb-6">
                    <label for="email" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Email</label>
                    <input 
                    type="email" 
                    required 
                    class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:text-green-strong lg:bg-almost-white opacity-70 lg:opacity-100" 
                    id="email" 
                    v-model="email" 
                    />
                </div>

                <div id="phone" class="flex flex-col mb-6">
                    <label for="phone" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Phone</label>
                    <input 
                    type="number" 
                    required 
                    class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:text-green-strong lg:bg-almost-white opacity-70 lg:opacity-100" 
                    id="phone" 
                    v-model="phone" 
                    />
                </div>

                <div id="password wrapper" class="flex flex-col md:flex-row md:gap-5">
                    <div class=" container flex flex-col mb-6">
                        <label for="password" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Password</label>
                        <input 
                        type="password" 
                        required 
                        class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:text-green-strong lg:bg-almost-white opacity-70 lg:opacity-100" 
                        id="password" 
                        v-model="password" 
                        />
                    </div>

                    <div class="container flex flex-col mb-4">
                        <label for="confirmPassword" class="font-Silkscreen mb-1 text-md text-green-strong font-medium lg:text-almost-white">Confirm Password</label>
                        <input 
                        type="password" 
                        required 
                        class="p-2 focus:outline-none rounded-md bg-green-low text-almost-white lg:text-green-strong lg:bg-almost-white opacity-70 lg:opacity-100" 
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
                class="mt-6 py-3 px-8 rounded-md text-md
                text-almost-white bg-green-low duration-200 hover:bg-background-pink 
                hover:text-logo-font-color lg:bg-green-strong font-semibold font-Silkscreen"
                >
                Register
                </button>

                <!-- LINK HACIA LOGIN -->
                <router-link 
                class="text-sm mt-2 text-center text-green-low 
                font-bold self-start mx-auto lg:text-green-strong" 
                :to="{name: 'Login'}"
                >
                Already have an account? <span class="text-green-strong font-semibold underline lg:text-almost-white">Login</span>
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
            verifyEmail.value = "Sign up complete! Please, verify your email!";
            redirect.value = "Redirecting to login..."
            setTimeout(() => {
                router.push({name: 'Login'});
                verifyEmail.value = null;
                redirect.value = null;
            },3000)                     
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