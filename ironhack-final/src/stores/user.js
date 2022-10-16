// /store/user.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
    async signUp (email, password,name,age,phone) {
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
      if (user) this.user = user;
    },
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
