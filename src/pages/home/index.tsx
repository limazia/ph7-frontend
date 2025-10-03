import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={"/characters"}>
        <h1 className="text-3xl font-bold mb-8">Personagens de Rick e Morty</h1>
      </Link>
    </div>
  );
}
