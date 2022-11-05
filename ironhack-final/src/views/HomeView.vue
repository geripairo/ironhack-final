<template>
  <div class="w-full h-screen bg-almost-white pt-12 lg:pt-2 pb-48 lg:pt-24">
    <div class="flex flex-col items-center xl:flex-row text-center 
    mx-10 mt-8 bg-almost-white h-full lg:mt-3 lg:justify-center
    lg:ml-10"

    >
      <img 
      id="landing-img" 
      class="object-contain mb-8 md:mb-0 xl:order-2 lg:w-4/6" 
      src="../assets/images/home/woman-run-2.png" 
      alt="woman-running"
      >
      <div class="text-black xl:bg-green-low xl:rounded-lg xl:p-8 xl:text-almost-white xl:shadow-xl mt-5">
        <p class="font-Silkscreen text-sm text-black text-1 lg:text-2 lg:text-green-strong">{{claimer}}</p>
        <h1 class="font-Roboto text-5  font-bold leading-none my-4 xl:text-6">Let's get in shape!</h1>
        <p class="font-Roboto text-1  font-bold leading-8 xl:text-2">Welcome to flexdev. Here, you can start your journey into becomimng the fittest developer.</p>
        <p class="font-Silkscreen text-base mt-3 leading-7 xl:text-xl">As developers we spend hours in front of the screen, smashing our butties on the chair. ¿Why not take a little break to keep the body pumped and ready?</p>
        <button class="bg-green-low text-almost-white rounded-lg py-4 px-8 mt-7 shadow-lg 
        duration-200 hover:bg-pink hover:text-green-strong xl:bg-green-strong"><router-link class="cursor-pointer text-xl font-semibold font-Silkscreen" :to="{ name: 'Register'}">Sign Up</router-link></button>
      </div>
    </div>
  </div>
</template>

<script setup>
// ROUTER
import {useRouter} from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'

const claimer = "<Train> Train your body () => Boost, Your, Code! </Train>"
</script>

<style>
</style>