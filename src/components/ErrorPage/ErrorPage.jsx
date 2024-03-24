import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h2 className="text-5xl">Oops...</h2>           
            <p>Page not found</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
