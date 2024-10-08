import {posts} from "../../lib/placeholder-data.js";
import Link from 'next/link';
export default function Page(){
    return (
        <>
        
            {posts.map((post)=>(
                <Link key={post.id} href={`/blog/post/${post.id}`}><h1>{post.title}</h1></Link>
                
            ))}
        
        </>
    )
}