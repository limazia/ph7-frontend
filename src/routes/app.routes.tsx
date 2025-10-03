import { Route } from "react-router-dom";

import { CustomRoutes } from "@/components/custom-routes";

import { AppLayout } from "@/pages/_layouts/app.layout";
import { NotFound } from "@/pages/not-found";

import { Home } from "@/pages/home";
import { Characters } from "@/pages/characters";

export function Routes() {
  return (
    <CustomRoutes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </CustomRoutes>
  );
}
