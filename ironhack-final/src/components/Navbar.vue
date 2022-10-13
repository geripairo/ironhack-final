<template>
    <header class="bg-header-purple text-white">
        <nav class="container py-1 px-4 gap-5 flex flex-col items-center">
            <div class="flex items-center gap-x-4 flex-col md:flex-row">
                <img class="w-32 sm:w-64" src="../assets/images/logo-img.png" alt="woman-yoga-logo">
                <h1 class="text-5 text-logo-font-color sm:text-6">Flexdev <br></h1>                
            </div>
            <p>{{claimer}}</p>
            <ul class="flex flex-1 gap-x-10 font-Poppins pb-6 text-background-pink text-xl md:pb-10 md:text-2">
                <router-link class="cursor-pointer" :to="{ name: ''}">HOME</router-link>
                <router-link class="cursor-pointer" :to="{ name: ''}">CREATE</router-link>
                <router-link class="cursor-pointer" :to="{ name: ''}">LOGIN</router-link>
                <li class="cursor-pointer">LOGOUT</li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const claimer = "<Train> Train your body () => Boost, Your, Code! </Train>"
</script>

<style>

</style>