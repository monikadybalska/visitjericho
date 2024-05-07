import Skeleton from "./skeleton";

export default function TwoCardsSkeleton() {
  return (
    <div className="w-full max-w-screen-xl gap-4 flex">
      <Skeleton className="h-[400px] w-full rounded-xl basis-full md:basis-1/2" />
      <Skeleton className="h-[400px] w-full rounded-xl hidden md:flex md:basis-1/2" />
    </div>
  );
}
