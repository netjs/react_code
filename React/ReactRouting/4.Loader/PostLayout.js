import { Outlet } from "react-router";
const PostLayout = () => {
    return(
        <div className="mx-2">
            <Outlet />
        </div>

    )
}

export default PostLayout;