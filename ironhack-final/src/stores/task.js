import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    data: [],
    viewData: []
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
        console.log(this.data);      
    },
    async fetchTasksId (id) {
      const { data: workouts, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('id', id)
        .order('id', { ascending: true });
        if(error) throw error;
        this.viewData = workouts[0];    
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
    },
    async deleteRow (id) {
      const {data, error} = await supabase
      .from('workouts')
      .delete()
      .eq('id', id)
      if(error) throw error;
    },
    async updateData (id, name, exercises) {
      const {error} = await supabase
      .from('workouts')
      .update({        
        workoutName: name,
        exercises: exercises
      })
      .eq('id', id)      
      if(error) throw error;
    }
  }
});