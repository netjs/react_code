import { isRouteErrorResponse, useRouteError } from "react-router";

 const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
  // return (
  //     <div>
  //       <h2 style={{color: "red"}}>Page Not Found (404) error!!</h2>
  //       <p>Page you are trying to access doesn't exist.</p>

  //     </div>
  // );
}

export default ErrorPage;