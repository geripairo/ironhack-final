<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- MENSAJE DE ESTADO -->
    <div v-if="statusMsg || errorMsg" class="mb-10 p-4 bg-light-grey rounded-md">
        <p class="text-at-light-green shadow-lg">
            {{statusMsg}}
        </p>
        <p class="text-ref-500">{{errorMsg}}</p>
    </div>

    <!-- CREAR EJERCICIO -->
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
        <!-- form -->
        <form class="flex flex-col gap-y-5 w-full">

            <h1 class="text-3 text-black">Create Workout</h1>

            <!-- Nombre del ejercicio -->
            <div class="flex flex-col">
                <label for="workout-name" class="mb-1 text-sm text-black">Workout Name</label>
                <input 
                type="text" 
                id="workout-name" 
                v-model="workoutName" 
                required 
                class="p-2 text-gray-500 focus:outline-none"
                >
            </div>

            <!-- Tipo de ejercicio -->
            <div class="flex flex-col">
                <label for="workout-type" class="mb-1 text-sm text-black">Workout Type</label>
                <select 
                id="workout-type" 
                v-model="workoutType" 
                class="p-2 text-gray-500 focus:outline-none" 
                required
                @change="workoutChange"
                >
                <option value="select-workout">Select Workout</option>
                <option value="strength">Strength Training</option>
                <option value="cardio">Cardio Training</option>
                </select>

            </div>

            <!-- Inputs de entrenamiento fuerza -->
            <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
                <div 
                class="flex flex-col gap-x-6 relative md:flex-row" 
                v-for="(item, index) in exercises" 
                :key="index"
                >
                    <div class="flex flex-col md:w-1/3">
                        <label for="exercise-name" class="mb-1 text-sm text-black">Exercise</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.exercise"
                        />
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="sets" class="mb-1 text-sm text-black">Sets</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.sets"
                        />
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="reps" class="mb-1 text-sm text-black">Reps</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.reps"
                        />
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="weight" class="mb-1 text-sm text-black">Weight (kgs)</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.weight"
                        />
                    </div>
                    <button 
                        type="button" 
                        class="mt-2 py-2 px-2 rounded-md self-start text-md
                        text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                        hover:text-logo-font-color"
                        v-if="exercises.length > 1"
                        @click="deleteExercise(item.id)"
                        >
                        Delete
                    </button>                    
                </div>
                <button 
                    @click="addExercise"
                    type="button" 
                    class="mt-6 py-3 px-8 rounded-md self-start text-md
                    text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                    hover:text-logo-font-color"
                    >
                    Add Exercise
                </button>
                
            </div>

            <!-- Inputs de entrenamiento de cardio -->
            <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
                <div 
                class="flex flex-col gap-x-6 relative md:flex-row" 
                v-for="(item, index) in exercises" 
                :key="index"
                >
                    <div class="flex flex-col md:w-1/3">
                        <label for="cardio-type" class="mb-1 text-sm text-at-light-green">Type</label>
                        <select 
                        id="cardio-type" 
                        v-model="item.cardioType" 
                        class="p-2 w-full text-black focus:outline-none"
                        >
                        <option value="#">Select Type</option>
                        <option value="run">Run</option>
                        <option value="walk">Walk</option>
                        </select>
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="distance" class="mb-1 text-sm text-at-light-green">Distance</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.distance"
                        />
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="duration" class="mb-1 text-sm text-at-light-green">Duration</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.duration"
                        />
                    </div>
                    <div class="flex flex-col md:w-1/3">
                        <label for="pace" class="mb-1 text-sm text-at-light-green">Pace</label>
                        <input 
                        type="text" 
                        required 
                        class="p-2 w-full text-black focus:outline-none"
                        v-model="item.pace"
                        />
                    </div>
                    <button 
                        type="button" 
                        class="mt-6 py-3 px-8 rounded-md self-start text-md
                        text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                        hover:text-logo-font-color"
                        v-if="exercises.length > 1"
                        @click="deleteExercise(item.id)"
                        >
                        Delete
                    </button> 
                    
                </div>
                <button
                    @click="addExercise" 
                    type="button" 
                    class="mt-6 py-3 px-8 rounded-md self-start text-md
                    text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                    hover:text-logo-font-color"
                    >
                    Add Exercise
                </button>
                
            </div>

            <button 
                type="submit" 
                class="mt-6 py-3 px-8 rounded-md self-start text-md
                text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                hover:text-logo-font-color"
                >
                Record Workout
            </button>
                
            <!-- Botón de guardar ejercicio en el dashboard -->


        </form>
    </div>
  </div>
</template>

<script setup>

// VUE
import { onMounted } from 'vue'
import {ref} from 'vue'
import {uid} from 'uid';

// ROUTER
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

// PINIA
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user.js'

// SUPABASE
import {supabase} from '../supabase.js'

// VARIABLES
const workoutName = ref("");
const workoutType = ref("select-workout")
const statusMsg = ref(null);
const errorMsg = ref(null);

// ARRAY PARA LOS EJERCICIOS
const exercises = ref([]);

// AÑADIR UN EJERCICIO NUEVO
const addExercise = function () {    
    if (workoutType.value === 'strength'){
        exercises.value.push({
            id: uid(),
            exercise: "",
            sets: "",
            reps: "",
            weight: ""
        });
        return
    }
    exercises.value.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: ""
    })
}

// CAMBIAR EL VALOR DEL ARRAY DE EJERCICIOS CUANDO CAMBIAMOS EL TIPO DE EJERCICIO
const workoutChange = function () {
    exercises.value = [];
    addExercise();
}

// ELIMINAR UN EJERCICIO
const deleteExercise = function (id) {    
    exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
    return;   
}

// CREAR EL EJERCICIO CON SUPABASE
const createWorkout = function () {
    try{}
    catch(error) {
        err
    }
}
</script>

<style>

</style>