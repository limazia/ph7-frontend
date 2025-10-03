import { Outlet } from "react-router-dom";

import { Header } from "@/components/header";

export function AppLayout() {
  return (
    <div className="h-screen flex flex-col antialiased scroll-smooth">
      <Header />

      <main className="flex flex-col h-full py-10 px-8 md:px-12">
        <div className="flex-1 pb-12">
          <Outlet />
        </div>
      </main>

      <footer />
    </div>
  );
}
