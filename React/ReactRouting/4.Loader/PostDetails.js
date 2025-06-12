import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
    
    return(
        <>
            <h2 className="text-center">{postData.title}</h2>
            <div>{postData.body}</div>
           
        </>
    )
}

export default PostDetails;

// How to get and add id to the URL
export async function loader(){
    const url = "https://jsonplaceholder.typicode.com/posts/"
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
        throw new Response('Error while fetching post data', {status:404});
    }
    else{
        const responseData = await response.json();
        return responseData;
    }

}