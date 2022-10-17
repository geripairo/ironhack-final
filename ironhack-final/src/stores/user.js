// /store/user.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {

  // VARIABLES----------->
  state: () => ({
    user: null,
  }),

  // FUNCIONES--------->
  actions: {

    // LISTENER DE EVENTO DE LOGIN O LOGOUT
    setUser(userId) {
      this.user = userId ? userId.user : null;
    },

    // OBTENER USUARIO
    async fetchUser () {
      const user = await supabase.auth.user();
      // this.user = user
    },

    // LOGIN 
    async logIn (email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) throw error;
      // if (user) this.user = user;
    },

    // REGISTRO
    async signUp (email, password, name, age, phone) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data:{
              name: name,
              age: age,
              phone: JSON.stringify(phone),
          }
      }
      });
      if (error) throw error;
      // if (user) this.user = user;
    },

    // LOGOUT
    async logOut () {
      await supabase.auth.signOut();      
    },

    // PINIA PERSIST
        persist: {
        enabled: true,
        strategies: [
            {
            key: 'user',
            storage: localStorage
            }
        ]
        }
    },
});
