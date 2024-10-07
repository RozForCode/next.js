import {posts} from "../../lib/placeholder-data.js";
export default function Page(){
    return (
        <>
        <h1>Posts</h1>
        <ol>
            {posts.map((post)=>(
                <li key={post.id}>
                    <h2>By user-{post.id} on {post.date}</h2>
                    <br></br>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    <br></br>
                </li>
            ))}
        </ol>
        </>
    )
}