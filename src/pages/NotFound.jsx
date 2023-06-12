import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>Oops! You seem to be lost</h1>
      <Link to="/">Play the quiz</Link>
    </div>
  );
}
