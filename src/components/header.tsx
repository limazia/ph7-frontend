import { Link } from "react-router-dom";

import { version } from "../../package.json";
import { usePageTitle } from "@/shared/hooks/use-page-title";

import Logo from "@/assets/logo.png";

import { Badge } from "./ui/badge";

export function Header() {
  const { pageTitle } = usePageTitle();

  return (
    <header className="w-full space-y-4 bg-white border-b px-8 md:px-12">
      <div className="w-full py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="h-16" />
          </Link>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">PH7</h1>
            <small>{pageTitle}</small>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <Badge className="text-sm font-medium text-white">v{version}</Badge>
        </div>
      </div>
    </header>
  );
}
