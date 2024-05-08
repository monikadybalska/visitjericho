import { getPracticalitiesPageHeader } from "@/app/_lib/api";

import Header from "../_components/header";
import SectionLayout from "../../_components/layouts/section-layout";
import Tips from "./_components/tips";
import GettingThere from "./_components/getting-there";
import { Suspense } from "react";
import MosaicSkeleton from "@/app/_components/skeletons/mosaic";
import ColumnsSkeleton from "@/app/_components/skeletons/columns";
import ParagraphSkeleton from "@/app/_components/skeletons/paragraph";

export default function Practicalities() {
  return (
    <>
      <Suspense fallback={<MosaicSkeleton />}>
        <Header slug="practicalities" query={getPracticalitiesPageHeader} />
      </Suspense>
      <SectionLayout id="getting-there">
        <Suspense fallback={<ColumnsSkeleton />}>
          <GettingThere color="green" />
        </Suspense>
      </SectionLayout>
      <SectionLayout id="tips">
        <Suspense fallback={<ParagraphSkeleton />}>
          <Tips />
        </Suspense>
      </SectionLayout>
    </>
  );
}
