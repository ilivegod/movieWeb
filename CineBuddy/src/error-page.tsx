import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div
      id="error-page"
      className=" flex flex-col items-center justify-center mt-10 gap-2"
    >
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link className={buttonVariants({ variant: "secondary" })} to="/">
          Go back home
        </Link>
      </div>
    </div>
  );
}
