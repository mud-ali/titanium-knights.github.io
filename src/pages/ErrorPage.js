import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status === 404 ? <img src="assets/error/404.svg" alt="" height="20%"/> : null}
      <img src="assets/error/astronaut.svg" alt="" height="20%"/>
      <p>
        <strong>Error:</strong> <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
