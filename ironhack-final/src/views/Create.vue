<template>

    <div class="h-full min-h-full">

        <div class="max-w-screen-md mx-auto px-4 py-24 pb-96 h-full">

            <!-- CREAR EJERCICIO -->
            <div class="p-8 flex items-start lg:bg-green-low lg:rounded-md lg:shadow-lg">
                <!-- form -->
                <form @submit.prevent="createWorkout" class="flex flex-col gap-y-5 w-full">

                    <h1 class="text-3 font-Silkscreen text-green-strong lg:text-almost-white">Create Workout</h1>

                    <!-- Nombre del ejercicio -->
                    <div class="flex flex-col">
                        <label for="workout-name" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Workout Name</label>
                        <input 
                        type="text" 
                        id="workout-name" 
                        v-model="workoutName" 
                        required 
                        class="p-2 text-green-low-500 border-2 border-green-strong rounded-md lg:border-none"
                        >
                    </div>

                    <!-- Tipo de ejercicio -->
                    <div class="flex flex-col">
                        <label for="workout-type" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Workout Type</label>
                        <select 
                        id="workout-type" 
                        v-model="workoutType" 
                        class="p-2 text-gray-500 border-2 border-green-strong rounded-md lg:border-none" 
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
                                <label for="exercise-name" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Exercise</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.exercise"
                                />
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="sets" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Sets</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.sets"
                                />
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="reps" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Reps</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.reps"
                                />
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="weight" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Weight (kgs)</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.weight"
                                />
                            </div>
                            <button 
                                type="button" 
                                class="mt-2 py-2 px-2 rounded-md self-start text-md
                                text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                                hover:text-logo-font-color font-Silkscreen"
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
                            hover:text-logo-font-color font-Silkscreen"
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
                                <label for="cardio-type" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Type</label>
                                <select 
                                id="cardio-type" 
                                v-model="item.cardioType" 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                >
                                <option value="#">Select Type</option>
                                <option value="run">Run</option>
                                <option value="walk">Walk</option>
                                </select>
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="distance" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Distance (km)</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.distance"
                                />
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="duration" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Duration (min)</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.duration"
                                />
                            </div>
                            <div class="flex flex-col md:w-1/3">
                                <label for="pace" class="mb-1 text-green-strong lg:text-almost-white text-sm font-Silkscreen">Intensity</label>
                                <input 
                                type="text" 
                                required 
                                class="p-2 w-full text-black focus:outline-none rounded-md border-2 border-green-strong lg:border-none"
                                v-model="item.pace"
                                />
                            </div>
                            <button 
                                type="button" 
                                class="mt-6 py-3 px-8 rounded-md self-start text-md
                                text-white bg-logo-font-color duration-200 hover:bg-background-pink 
                                hover:text-logo-font-color font-Silkscreen shadow-md"
                                v-if="exercises.length > 1"
                                @click="deleteExercise(item.id)"
                                >
                                Delete
                            </button> 
                            
                        </div>

                        <!-- Añadir ejercicio -->
                        <button
                            @click="addExercise" 
                            type="button" 
                            class="mt-6 py-3 px-8 rounded-md self-start text-md
                            text-almost-white bg-logo-font-color duration-200 hover:bg-pink 
                            hover:text-green-strong font-Silkscreen"
                            >
                            Add Exercise
                        </button>
                        
                    </div>

                    <button 
                        type="submit" 
                        class="mt-6 py-3 px-8 rounded-md text-md
                        text-white bg-logo-font-color duration-200 hover:bg-pink 
                        hover:text-green-strong font-Silkscreen"
                        >
                        Record Workout
                    </button>
                        
                    <!-- MENSAJE DE ESTADO -->
                    <div v-if="statusMsg || errorMsg" class="text-center mb-10 p-4 lg:bg-almost-white lg:rounded-md lg:shadow-lg font-Roboto font-semibold">
                        <p class="text-green-strong">{{statusMsg}}</p>
                        <p class="text-red-500">{{errorMsg}}</p>
                    </div>

                </form>
            </div>
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
import {useTaskStore} from '../stores/task.js'

// SUPABASE
import {supabase} from '../supabase.js'

// VARIABLES
const userStore = useUserStore();
const taskStore = useTaskStore();
const user = userStore.user;
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

// CREAR EL EJERCICIO EN SUPABASE
const createWorkout = async function () {
    try{
        await taskStore.insertRow(user.id, workoutName.value, workoutType.value, exercises.value);
        statusMsg.value = 'Wrokout Created!'
        workoutName.value = null;
        workoutType.value = 'select-workout';
        exercises.value = [],
        setTimeout(() => {
            statusMsg.value = null;
        }, 5000);
    }

    catch(error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
            errorMsg.value = null;
        }, 5000);
    }
}
</script>

<style>

</style>