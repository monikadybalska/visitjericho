import Skeleton from "./skeleton";

export default function ThreeCardsSkeleton() {
  return (
    <div className="w-full flex mt-16 justify-center items-center">
      <div className="w-full max-w-screen-xl gap-4 flex">
        <Skeleton className="h-[400px] w-full rounded-xl basis-1/3" />
        <Skeleton className="h-[400px] w-full rounded-xl basis-1/3" />
        <Skeleton className="h-[400px] w-full rounded-xl basis-1/3" />
      </div>
    </div>
  );
}
