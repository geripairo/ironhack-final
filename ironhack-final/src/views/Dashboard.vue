<template>
    
        <div id="dashboard-wrapper" class="container mt-10 px-4 my-24 h-screen bg-almost-white pb-64">
    
          <div v-if="data.length === 0" class="w-full flex flex-col items-center pt-24">
              <h1 class="text-2xl text-black">This is empty...</h1>
              <router-link
              class="mt-6 py-2 px-6 rounded-md text-sm text-white bg-black" 
              :to="{name: 'Create'}"> Create new Workout</router-link>
          </div>
      
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-almost-white">
              <router-link 
              class="flex-flex-col items-center bg-green-low p-8 shadow-md cursor-pointer rounded-xl"
              :to="{name: 'View-Workout', params: {workoutId: workout.id}}"
              v-for="(workout, index) in data"
              :key="index"
              >
                <img 
                  v-if="workout.workoutType === 'cardio'" 
                  src="../assets/images/running.png" 
                  alt="test-img1"
                  class="h-24 w-auto mx-auto"
                />

                <img 
                  v-else 
                  src="../assets/images/fuerza.png"
                  alt="test-img2"
                  class="h-24 w-auto mx-auto"
                />

                <p class="text-center mt-6 py-1 w-full text-base font-semibold font-Roboto text-almost-white">
                {{workout.workoutType}}
                </p>
        
                <h1 class="mt-8 mb-2 text-center text-xl text-almost-white font-Silkscreen">
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