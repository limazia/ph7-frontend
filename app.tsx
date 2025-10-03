import "@/styles/globals.css";

import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ClientProviders } from "@/components/providers/client-providers";
import { Routes } from "@/routes/app.routes";

setDefaultOptions({ locale: ptBR });

export function App() {
  return (
    <ClientProviders>
      <Routes />
    </ClientProviders>
  );
}