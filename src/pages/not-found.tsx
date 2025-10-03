import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-white">404</h1>
          <p className="text-4xl text-muted-foreground font-medium">
            Página não encontrada.
          </p>
        </div>

        <p className="text-accent-foreground">
          Volte para a{" "}
          <Link className="text-sky-500 underline" to="/">
            página inicial
          </Link>
          .
        </p>
      </div>
    </div>
  );
}