<script>
    import { ref } from 'vue';
    import { api } from '@/configs/axios.vue';

    const test = true;

    //Blog List API
    export async function GetBlogListDetails(_pageIndex, _steps) {
        try {
            if (test) {
                return {
                    blogDetailsList: 
                    [
                        {
                            id: "1",
                            imgUrl: "https://picsum.photos/600/300",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                        {
                            id: "2",
                            imgUrl: "https://picsum.photos/600/300",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                        {
                            id: "3",
                            imgUrl: "https://picsum.photos/600/300",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                    ],
                    page: {
                        index: 1,
                        total: 1    
                    }
                }
            }

            const response = await api.get(
                '/bloglist/details',
                {
                    params: 
                    {
                        pageIndex: _pageIndex,
                        steps: _steps
                    }
                },
            );
            
            return response.data;
        }
        catch(error) {
            return false;
        }
    }

    export async function GetBlogListDetailsByUsername(_pageIndex, _steps, _username) {
        try {
            if (test) {
                return {
                    blogDetailsList: 
                    [
                        {
                            id: "1",
                            imgUrl: "https://picsum.photos/600/300",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                        {
                            id: "2",
                            imgUrl: "https://picsum.photos/600",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                        {
                            id: "3",
                            imgUrl: "https://picsum.photos/600/300",
                            title: "ABC",
                            username: "defaultUsername",
                            viewsText: "10M",
                            statusText: "New",
                            dateText: "25/10/2025",
                            voteText: 0,
                        },
                    ],
                    page: {
                        index: 1,
                        total: 1    
                    }
                }
            }

            const response = await api.get(
                '/bloglist/details',
                {
                    params: 
                    {
                        pageIndex: _pageIndex,
                        steps: _steps,
                        username: _username
                    }
                },
            );
            
            return response.data;
        }
        catch(error) {
            return false;
        }
    }

    //Blog API
    export async function GetBlogDetails(_blogId) {
        try {
            if (test) {
                return {
                    blogDetails:
                    {
                        id: _blogId,
                        imgUrl: "https://picsum.photos/600/300",
                        title: "Title",
                        username: "defaultUsername",
                        viewsText: "0",
                        statusText: "New",
                        dateText: "25/10/2025",
                        voteText: 0,
                    }
                }
            }

            const response = await api.get(
                '/blog/details',
                {
                    params: 
                    {
                        blogId: _blogId
                    }
                },
            );
            
            return response.data;
        }
        catch(error) {
            return false;
        }
    }

    export async function GetBlogContent(_blogId) {
        try {
            if (test) {
                return '# Content 1 \n ## Content 2 \n ### Content 3 \n # Content 4 \n ## Content 5 \n ### Content 6 \n';
            }

            const response = await api.get(
                '/blog/content',
                {
                    params: 
                    {
                        blogId: _blogId
                    },
                    responseType: 'text',
                },
            );
            
            return response.data;
        }
        catch(error) {
            return false;
        }
    }

    export async function PostBlog(_blogDetails, _blogContent) {
         try {
            const response = await api.post(
                '/blog/create',
                {
                    blogDetails: _blogDetails,
                    blogContent: _blogContent
                },
            );

            return true;
        }
        catch(error) {
            return false;
        }
    }

    export async function PutBlog(_blogDetails, _blogContent) {
         try {
            const response = await api.put(
                '/blog/update/' + _blogDetails.id,
                {
                    blogDetails: _blogDetails,
                    blogContent: _blogContent
                },
            );

            return true;
        }
        catch(error) {
            return false;
        }
    }
</script>