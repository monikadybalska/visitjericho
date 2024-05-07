import Skeleton from "./skeleton";
import Column from "../layouts/column";

export default function ColumnsSkeleton() {
  return (
    <div className="w-full flex flex-col gap-12 lg:gap-6 lg:flex-row">
      <Column>
        <Skeleton className="h-[400px] w-full rounded-xl basis-full md:basis-1/2" />
        <Skeleton className="h-[400px] w-full rounded-xl basis-full md:basis-1/2" />
      </Column>
      <Column>
        <Skeleton className="h-[400px] w-full rounded-xl basis-full md:basis-1/2" />
        <Skeleton className="h-[400px] w-full rounded-xl basis-full md:basis-1/2" />
      </Column>
    </div>
  );
}
