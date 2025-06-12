import { Link, useLoaderData } from "react-router";

const PostList = () => {
    return(
        <>            
            <h2 className="text-info-emphasis text-center">Posts</h2>
            <ul className="list-group">
                {postData.map((post) =>
                <li className="list-group-item" key={post.id}>
                    {post.id} {post.title}
                </li>
                )}
            </ul>
        </>
    )
}

export default PostList


export async function loader(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    // check for any error
    if(!response.ok){
        // use Response object
        throw new Response("Failed to load data", { status: response.status });
    }else{
        const responseData = await response.json();
        return responseData;
    }
}