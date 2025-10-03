import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const pageTitles: Record<string, string> = {
  "/": "Início",
  "/characters": "Personagens de Rick e Morty",
};

export function usePageTitle() {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || "Início";

  useEffect(() => {
    document.title = `${pageTitle} - PH7`;
  }, [pageTitle]);

  return { pageTitle };
}
