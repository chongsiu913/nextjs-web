import { Post } from '../../typings'

const fetchPosts = async () => {
   
    const url: string =  `${process.env.NEST_HOST}/posts`
    const res = await fetch(url);
   
    const posts: Post[] = await res.json();
    console.log(posts)
    return posts
}

export default async function PostsPage(){

    const posts = await fetchPosts()

    return(
        <div>
            <div>{posts.map((post)=>(
                <div key={post.body}>{post.header}</div>
            ))}</div>
        </div>
       
    );
};

