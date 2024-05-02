import TwoCardsSkeleton from "./two-cards";

export default function ColumnsSkeleton() {
  return (
    <div className="w-full max-w-screen-xl gap-4 flex flex-col">
      <TwoCardsSkeleton />
      <TwoCardsSkeleton />
    </div>
  );
}
