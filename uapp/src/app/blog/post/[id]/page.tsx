import {posts} from "../../../lib/placeholder-data.js";
import Post from '../../../ui/components/posts/posts';
// next.js\uapp\src\app\ui\components\posts\posts.tsx
export default function Page({params}:{params:{id:string}}){
    const post = posts.find((post)=> post.id ===params.id);
    if(!post){
        return <p>Not found</p> 
    }
    return (
        <>
        <h1 >Post</h1>
        {/* <ol>
            {posts.map((post)=>(
                <li key={post.id}>
                    <h2>By user-{post.id} on {post.date}</h2>
                    <br></br>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    <br></br>
                </li>
            ))}
        </ol> */}
        <span className="text-pink-400">
            
        <Post  {...post}/>
        
        </span>
        </>
    )
}