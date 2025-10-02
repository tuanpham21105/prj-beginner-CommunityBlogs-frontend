<script>
    import { ref } from 'vue';
    import { api } from '@/configs/axios.vue';
    
    const test = true;

    //Login API
    export async function Login(_username, _password) {
        try {
            if (test) {
                return {
                    userDetails: {
                        username: 'defaultUsername',
                        avatarUrl: 'https://placehold.jp/150x150.png',
                        joinDate: '1/1/1',
                        vote: 0,
                    }
                }
            }

            const response = await api.post(
                '/auth/login',
                {
                    username: _username,
                    password: _password
                }
            );
            

            return response.data;
        }
        catch(error) {
            return false;
        }
    }
</script>