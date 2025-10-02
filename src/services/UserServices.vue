<script>
    import { ref } from 'vue';
    import { api } from '@/configs/axios.vue';

    const test = true;

    //User API
    export async function GetUserDetails(_username) {
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

            const response = await api.get(
                '/user/' + _username
            );
            
            return response.data;
        }
        catch(error) {
            return false;
        }
    }

    
</script>