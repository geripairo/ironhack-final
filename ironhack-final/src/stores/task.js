import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('workouts')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async insertRow (id, name, type, exercises) {
      const {error} = await supabase
      .from('workouts')
      .insert([
        {
          user_id: id,
          workoutName: name,
          workoutType: type,
          exercises: exercises
        }
      ])
      if(error) throw error;
    }
  }
});