<script>
    import { ref } from 'vue';
    import { api } from '@/configs/axios.vue';

    const test = true;

    export async function GetBlogDetails(pageIndex, _steps) {
        try {
            const response = await api.get(
                '/blogdetails',
                {
                    params: 
                    {
                        page:pageIndex,
                        steps: _steps
                    }
                },
            );
            
            if (test) {
                return {
                    blogDetailsList: 
                    [
                        {
                            id: "1",
                            imgUrl: "https://picsum.photos/600",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                        },
                        {
                            id: "2",
                            imgUrl: "https://picsum.photos/600",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                        },
                        {
                            id: "3",
                            imgUrl: "https://picsum.photos/600",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                        },
                    ],
                    page: {
                        index: 1,
                        total: 1    
                    }
                }
            }

            return response.data;
        }
        catch(error) {


            return false;
        }
    }
</script>