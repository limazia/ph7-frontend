import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function CharacterCardSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="overflow-hidden bg-card border-border pt-0">
          {/* Image skeleton */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Skeleton className="w-full h-full" />
            {/* Badge skeleton */}
            <div className="absolute top-3 right-3">
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>

          <CardContent className="p-4 space-y-3">
            {/* Name and info skeleton */}
            <div>
              <Skeleton className="h-6 w-3/4 mb-1" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            {/* Details skeleton */}
            <div className="space-y-2">
              {/* Origin */}
              <div className="flex items-start gap-2">
                <Skeleton className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <Skeleton className="h-3 w-12 mb-1" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2">
                <Skeleton className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <Skeleton className="h-3 w-16 mb-1" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Created date */}
              <div className="flex items-start gap-2">
                <Skeleton className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <Skeleton className="h-3 w-14 mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
