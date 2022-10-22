import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    data: [],
    dataLoaded: null
  }),
  actions: {
    async fetchTasks (id) {
      const { data: workouts, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('user_id', id)
        .order('id', { ascending: true });
        if(error) throw error;
        this.data = workouts;
        this.dataLoaded = true;
        console.log(this.data);      
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