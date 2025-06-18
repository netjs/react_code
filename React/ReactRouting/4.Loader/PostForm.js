import { useSubmit } from "react-router";

const PostForm = () => {
   
    const submit = useSubmit();
    const formSubmitHandler = (event) => {
        event.preventDefault();
        //console.log(event.currentTarget);
        submit(event.currentTarget, {method:"POST", action:"/post/new"});
    }
    return(
        <div className="container">
            <h2>Post</h2>
            <form onSubmit={formSubmitHandler}> 
                {/* <div className="mb-2 mt-2">
                    <label className="form-label" htmlFor="id">ID: </label>
                    <input className="form-control" type="text" name="id" id="id" defaultValue={postData?postData.id:""}></input>
                </div> */}
                <div className="mb-2">
                    <label className="form-label" htmlFor="title">Title: </label>
                    <input className="form-control" type="text" name="title" id="title"></input>
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="body">Body: </label>
                    <textarea className="form-control" type="text" name="body" id="body"></textarea>
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="userId">User ID: </label>
                    <input className="form-control" type="text" name="userId" id="userId" rows="3"></input>
                </div>
                <button className="btn btn-info" type="submit">Save</button>
            </form>
        </div>
    )
}

export default PostForm;