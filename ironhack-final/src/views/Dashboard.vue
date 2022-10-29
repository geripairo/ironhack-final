<template>
    
        <div class="container mt-10 px-4">
    
        <div v-if="data.length === 0" class="w-full flex flex-col items-center">
            <h1 class="text-2xl text-black">This is empty...</h1>
            <router-link
            class="mt-6 py-2 px-6 rounded-md text-sm text-white bg-black" 
            :to="{name: 'Create'}"> Create new Workout</router-link>
        </div>
    
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <router-link 
            class="flex-flex-col items-center bg-white p-8 shadow-md cursor-pointer"
            :to="{name: 'View-Workout', params: {workoutId: workout.id}}"
            v-for="(workout, index) in data"
            :key="index"
            >
              <img 
                v-if="workout.workoutType === 'cardio'" 
                src="../assets/images/logo-img.png" 
                alt="test-img1"
                class="h-24 w-auto"
              />

              <img 
                v-else 
                src="../assets/images/logo-full.png"
                alt="test-img2"
                class="h-24 w-auto"
              />

              <p class="mt-6 py-1 px-3 text-xs text-black bg-white shadow-md rounded-md">
              {{workout.workoutType}}
              </p>
      
              <h1 class="mt-8 mb-2 text-center text-xl text-black">
              {{workout.workoutName}}
              </h1>
            </router-link>
        </div>
        </div>
  </template>
  
  <script setup>
  // VUE
  import {ref, computed, onMounted} from 'vue'
  
  // ROUTER
  import { RouterLink, RouterView } from 'vue-router'
  import { useRouter } from 'vue-router'
  
  // PINIA
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '../stores/user.js'
  import {useTaskStore} from '../stores/task.js'
  
  // SUPABASE
  import {supabase} from '../supabase.js'
  
  // VARIABLES
  const userStore = useUserStore();
  const taskStore = useTaskStore();
  const data =  computed(() => taskStore.data);
  const user = userStore.user;
  
  onMounted(function() {
    try{
      taskStore.fetchTasks(user.id)
    }
    catch(error){
      console.warn(error.message)
    }
  });
  
  </script>
  
  <style>
  
  </style>