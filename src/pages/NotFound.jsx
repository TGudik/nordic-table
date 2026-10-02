import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Siden findes ikke</p>
      <Link to="/">Tilbage til forsiden</Link>
    </div>
  );
}
