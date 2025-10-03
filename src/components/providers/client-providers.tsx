import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NuqsAdapter } from "nuqs/adapters/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/lib/tanstack-query";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - PH7" />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NuqsAdapter>
            <TooltipProvider delayDuration={0}>
              {children}

              <Toaster
                position="top-right"
                expand
                closeButton={false}
                toastOptions={{
                  duration: 5000,
                }}
              />
            </TooltipProvider>
          </NuqsAdapter>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
