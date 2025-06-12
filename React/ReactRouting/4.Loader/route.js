
import { createBrowserRouter } from "react-router";
import Home from "./home";
import NavigationNavLink from "./NavigationNavLink";
import ErrorPage from "./ErrorPage";
import PostList, {loader as PostLoader} from "./PostList";
import PostDetails, {loader as PostDetailsLoader} from "./PostDetails";
import PostLayout from "./PostLayout";


export const route = createBrowserRouter([
    {path: "/", element: <NavigationNavLink />, errorElement: <ErrorPage />,
     children: [
        {index: true, element: <Home /> },
        {path: "post", element: <PostLayout />,
         children:[
            {index: true, element: <PostList />, loader: PostLoader, hydrateFallbackElement: <h2>Loading...</h2>},
            {path: ":postId", element: <PostDetails />, loader: PostDetailsLoader, hydrateFallbackElement: <h2>Loading...</h2>},
         ]
        },
     ]
    },
])