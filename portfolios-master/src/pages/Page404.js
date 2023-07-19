import "../App.css";
import { Link } from "react-router-dom";
import errorPic from "../images/logo-404.png";
const Page404 = () => {
  return (
    <>
      <div className="errorHolder">
        <img src={errorPic} alt="error page" />
        <h1>page not found</h1>

        <Link to="/" className="link">
          back to home
        </Link>
      </div>
    </>
  );
};

export default Page404;
