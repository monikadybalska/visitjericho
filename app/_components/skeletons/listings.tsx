import Skeleton from "./skeleton";

export default function ListingsSkeleton() {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
      <Skeleton className="h-[400px] rounded-xl basis-full md:basis-1/2 lg:basis-1/3 pl-4 -ml-4 flex flex-1" />
    </div>
  );
}
