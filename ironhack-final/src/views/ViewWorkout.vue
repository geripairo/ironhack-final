<template>
  <div class="max-w-screen-sm mx-auto px-3 py-10 pb-40">
    <div class="">
      <!-- Info general del workout -->
      <div class="flex flex-col items-center p-8 rounded-md bg-green-low relative">
        <div v-if="userStore.user" class="flex absolute left-2 top-2 gap-x-2">
          <div 
          class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-logo-font-color shadow-lg"
          @click="editMode"
          >
          <img class="h-3.5 w-auto" src="../assets/images/pencil-light.png" alt="pencil-icon">
          </div>
          <div 
          class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-logo-font-color shadow-lg"
          @click="deleteWorkout"
          >
          <img class="h-3.5 w-auto" src="../assets/images/trash-light.png" alt="trash-icon">
          </div>
        </div>
        <img 
        v-if="viewData.workoutType === 'cardio'" 
        class="h-40 w-auto" src="../assets/images/running.png" 
        alt="workout-img"
        >
        <img 
        v-else 
        class="h-40 w-auto" src="../assets/images/fuerza.png" 
        alt="workout-img"
        >

        <!-- <span class="mt-6 py-4 px-12 text-xs text-almost-white font-Roboto font-semibold 
        bg-green-strong rounded-md shadow-md"
        >
        {{viewData.workoutType}}
        </span> -->

        <div class="w-full mt-6">
          <input 
          v-if="edit" 
          v-model="viewData.workoutName"
          type="text" 
          class="p-2 w-full text-green-strong rounded-md bg-almost-white"
          >

          <h1 v-else class="text-2 text-center font-Silkscreen text-almost-white">
            {{viewData.workoutName}}
          </h1>
        </div>      
      </div>
      
      <!-- Ejercicios -->
      <div class="mt-10 p-8 rounded-md flex flex-col items-center bg-green-strong shadow-md">
        <!-- Fuerza -->
        <div v-if="viewData.workoutType === 'strength'" class="flex flex-col gap-y-4 w-full">
          <div 
            v-for="(item, index) in viewData.exercises"
            :key="index"
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row text-almost-white"
          >
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-almost-white font-Silkscreen">Exercise</label>
              <input 
              id="exercise-name"
              v-if="edit" 
              type="text" 
              v-model="item.exercise"
              class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.exercise}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="sets" class="mb-1 text-sm text-almost-white font-Silkscreen">Sets</label>
              <input 
              id="sets"
              v-if="edit" 
              type="text" 
              v-model="item.sets"
              class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.sets}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="reps" class="mb-1 text-sm text-almost-white font-Silkscreen">Reps</label>
              <input 
              id="reps"
              v-if="edit" 
              type="text" 
              v-model="item.reps"
              class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.reps}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="weight" class="mb-1 text-sm text-almost-white font-Silkscreen">Weight(Kg's)</label>
              <input 
              id="weight"
              v-if="edit" 
              type="text" 
              v-model="item.weight"
              class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.weight}}</p>
            </div>
            <img 
            v-if="edit && viewData.exercises.length > 1"
            @click="deleteExercise(item.id)" 
            src="../assets/images/trash-light.png" 
            alt="trash-icon"
            class="absolute h-4 w-auto -left-5 cursor-pointer"
            >
          </div>
          <button
            v-if="edit"
            @click="addExercise" 
            type="button" 
            class="mt-6 py-3 px-8 rounded-md self-start text-md
            text-white bg-green-low duration-200 hover:bg-pink 
            hover:text-green-strong font-Silkscreen font-semibold"
          >
          Add Exercise
          </button>
        </div>

        <!-- Cardio -->
        <div v-else class="flex flex-col gap-y-4 w-full">
          <div 
            v-for="(item, index) in viewData.exercises"
            :key="index"
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row text-almost-white"
          >
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="cardioType" class="mb-1 text-sm text-almost-white font-Silkscreen">Type</label>
              <select 
                id="cardioType"
                v-if="edit"                 
                v-model="item.cardioType"
                class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
                <option value="#">Select Type</option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
              </select>
              <p v-else>{{item.cardioType}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="distance" class="mb-1 text-sm text-almost-white font-Silkscreen">Distance (km)</label>
              <input 
                id="distance"
                v-if="edit" 
                type="text" 
                v-model="item.distance"
                class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.distance}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="duration" class="mb-1 text-sm text-almost-white font-Silkscreen">Duration (min)</label>
              <input 
                id="duration"
                v-if="edit" 
                type="text" 
                v-model="item.duration"
                class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
              >
              <p v-else>{{item.duration}}</p>
            </div>
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="pace" class="mb-1 text-sm text-almost-white font-Silkscreen">Intensity</label>
              <input 
              id="pace"
              v-if="edit" 
              type="text" 
              v-model="item.pace"
              class="p-2 w-full text-green-strong bg-almost-white rounded-md focus:outline-none"
            >
              <p v-else>{{item.pace}}</p>
            </div>
            <img 
            v-if="edit && viewData.exercises.length > 1"
              @click="deleteExercise(item.id)" 
              src="../assets/images/trash-light.png" 
              alt="trash-icon"
              class="absolute h-4 w-auto -left-5 cursor-pointer"
            >
          </div>
          <button
            v-if="edit"
            @click="addExercise" 
            type="button" 
            class="mt-6 py-3 px-8 rounded-md self-start text-md
            text-almost-white bg-green-low duration-200 hover:bg-pink 
            hover:text-green-strong font-Silkscreen font-semibold"
          >
            Add Exercise
          </button>
        </div>

        <!-- Actualizar el data -->
        <button
            v-if="edit"
            @click="update" 
            type="button" 
            class="mt-6 py-3 px-8 rounded-md text-md
            text-white bg-green-low duration-200 hover:bg-pink 
            hover:text-logo-font-color w-full font-Silkscreen font-semibold"
        >
          Update Workout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// VUE
import {ref, computed, onMounted} from 'vue'
import {uid} from 'uid'
  
// ROUTER
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import {useRoute} from 'vue-router'
  
// PINIA
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user.js'
import {useTaskStore} from '../stores/task.js'
  
// SUPABASE
import {supabase} from '../supabase.js'

// VARIABLES
const userStore = useUserStore();
const taskStore = useTaskStore();
const viewData =  computed(() => taskStore.viewData);
const data =  computed(() => taskStore.data);
const route = useRoute();
const router = useRouter();
const edit = ref(null);
const workoutId = ref(route.params.workoutId)

//  ABRIR LA VISTA DEL EJERCICIO SELECCIONADO
onMounted(function() {
    try{
      taskStore.fetchTasksId(workoutId.value)
      console.log(viewData);
    }
    catch(error){
      console.warn(error.message)
      
    }
  });

  // ACTIVAR LA EDICIÓN DEL EJERCICIO
const editMode = function () {
  edit.value = !edit.value;
}

// ELIMINAR TASK
const deleteWorkout = async function () {
  try{
    await taskStore.deleteRow(workoutId.value)
    router.push({name: "Dashboard"});
  }catch(error) {
    console.warn(error.message)
  }
}

// AÑADIR EJERCICIO DESDE EL MODO EDITAR
const addExercise = function () {    
    if (viewData.value.workoutType === 'strength'){
        viewData.value.exercises.push({
            id: uid(),
            exercise: "",
            sets: "",
            reps: "",
            weight: ""
        });
        return
    }
    viewData.value.exercises.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: ""
    })  
}

// ELIMINAR EJERCICIO
const deleteExercise = function (id) {    
    viewData.value.exercises = viewData.value.exercises.filter((exercise) => exercise.id !== id);
    return;   
}

// UPDATE DATOS EN SUPABASE 
const update = async function () {
  try{
    await taskStore.updateData(workoutId.value, viewData.value.workoutName, viewData.value.exercises)
    edit.value = false;
  }catch(error){
    console.warn(error.message)
  }
}

</script>

<style>

</style>