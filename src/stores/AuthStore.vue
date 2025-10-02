<script>
    import { defineStore } from 'pinia';

    //Auth Store
    export const useAuthStore = defineStore('auth', 
    {
        state: () => 
        ({
            user: null
        }),
        getters: 
        { 
            isLoggedIn: (state) => !!state.user 
        },
        actions: 
        {
            setUser(user) { this.user = user },
            logout() 
            { 
                this.user = null
            }
        }
    });
</script>